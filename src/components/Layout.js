import React, { Fragment, useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { lighten } from 'polished'
import { Global, css } from '@emotion/core'
import { ThemeProvider, themes } from './Theming'
import { bpMaxSM } from '../lib/breakpoints'
import mdxComponents from './mdx'
import Header from './Header'
// import { fonts } from '../lib/typography'
import config from '../../config/website'
import Footer from '../components/Footer'

const getGlobalStyles = theme => {
  return css`
    form {
      margin: 0;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    html,
    html {
      text-rendering: optimizeLegibility;
      overflow-x: hidden;
      overflow-y: auto !important;
      box-sizing: border-box;
      -ms-overflow-style: scrollbar;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    body {
      font-family: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue", sans-serif;
      font-style: normal;
      padding: 0;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      background: ${theme.colors.bodyBg};
      color: ${theme.colors.text};
      line-height: 1.6em;
    }
    &::selection {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }
    a {
      color: ${theme.colors.link};
      text-decoration: none;
      &:hover,
      &:focus {
        color: ${theme.colors.link};
      }
      &:hover {
        text-decoration: underline;
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.text};
      a {
        color: ${theme.colors.text};
        &:hover,
        &:focus {
          color: ${theme.colors.text};
        }
      }
      line-height: 1.2;
    }
    ${bpMaxSM} {
      p,
      em,
      strong {
        font-size: 90%;
      }
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 24px;
      }
    }
    hr {
      margin: 50px 0;
      border: none;
      border-top: 1px solid ${theme.colors.gray};
      background: none;
    }
    em {
      font-family: "Helvetica";
    }
    strong {
      em {
        font-family: "Helvetica";
      }
    }
    input {
      border-radius: 4px;
      border: 1px solid ${theme.colors.gray};
      padding: 5px 10px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
      font-family: "Helvetica";
      margin-top: 5px;
      ::placeholder {
        opacity: 0.4;
      }
    }
    .gatsby-resp-image-image {
      background: none !important;
      box-shadow: 0;
    }
    button {
      border-radius: 4px;
      background-color: ${theme.colors.primary};
      border: none;
      color: ${theme.colors.white};
      padding: 5px 10px;
      cursor: pointer;
      border: 1px solid ${theme.colors.primary};
      transition: all 150ms;
      :hover {
        background: ${lighten(0.05, theme.colors.primary)};
        border: 1px solid ${lighten(0.05, theme.colors.primary)};
      }
    }
    pre {
      background-color: #061526 !important;
      border-radius: 4px;
      font-size: 16px;
      padding: 10px;
      overflow-x: auto;
      /* Track */
      ::-webkit-scrollbar {
        width: 100%;
        height: 5px;
        border-radius: 0 0 5px 5px;
      }
      ::-webkit-scrollbar-track {
        background: #061526;
        border-radius: 0 0 4px 4px;
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
      }
    }
  `
}

export default ({
  children
}) => {
  const initializeTheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'default'
    } else {
      return 'default'
    }
  }

  const [themeName, setTheme] = useState(initializeTheme)

  useEffect(() => {
    localStorage.setItem('theme', themeName)
  }, [themeName])

  const toggleTheme = name => setTheme(name)
  const theme = {
    ...themes[themeName],
    toggleTheme: toggleTheme,
  }

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Global styles={getGlobalStyles(theme)} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
          `}
        >
          <Header />
            <div css={css`
              margin-top: 80px;
            `}>
              {children}
              <Footer />
            </div>
        </div>
      </Fragment>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author {
        name
      }
      keywords
    }
  }
`
