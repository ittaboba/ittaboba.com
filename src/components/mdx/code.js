import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import vsDark from "prism-react-renderer/themes/vsDark"
import { Line, LineContent, LineNumber } from "./lines"

export default ({ codeString, language /* metastring */ }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      theme={vsDark}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "20px",
            margin: "40px auto",
            borderRadius: "5px",
            overflowX: "scroll",
            lineHeight: "1.4",
            maxWidth: "750px"
          }}
        >
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNumber>{i + 1}</LineNumber>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
