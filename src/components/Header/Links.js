import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'
import { css } from '@emotion/core'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link css={css`
        font-weight: bold;
      `} to="/blog" aria-label="View blog page">
        Blog
      </Link>
      <Link css={css`
        font-weight: bold;
      `} to="/projects" aria-label="View blog page">
        Projects
      </Link>
      <Link css={css`
        font-weight: bold;
      `} to="/about" aria-label="View blog page">
        About
      </Link>

      <ThemeToggler
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
