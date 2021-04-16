import React from "react"
import Title from "./title"
import Subtitle from "./subtitle"
import Blockquote from "./blockquote"
import Code from "./code"
import ExternalLink from "./externalLink"
import InlineCode from "./inlineCode"
import List from "./list"
import ListItem from "./listitem"
import Paragraph from "./paragraph"
import Figcaption from "./figcaption"

const Mdx = {
  h2: props => <Title {...props} />,
  h3: props => <Subtitle {...props} />,
  a: props => <ExternalLink {...props} />,
  p: props => <Paragraph {...props} />,
  figcaption: props => <Figcaption {...props} />,
  blockquote: props => <Blockquote {...props} />,
  inlineCode: props => <InlineCode {...props} />,
  ul: props => <List {...props} />,
  li: props => <ListItem {...props} />,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}

export default Mdx

// taken from kent c. dodds blog source code
// lifted this from mdx-utils
// it doesn't compile it's code and this busted IE, so I'm just vendoring it.
function preToCodeBlock(preProps) {
  if (
    // children is code element
    preProps.children &&
    // code props
    preProps.children.props &&
    // if children is actually a <code>
    preProps.children.props.mdxType === "code"
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      className = "",
      ...props
    } = preProps.children.props

    const matches = className.match(/language-(?<lang>.*)/)

    return {
      codeString: codeString.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : "",
      ...props,
    }
  }
}
