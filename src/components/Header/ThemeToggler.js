import React from 'react'
import styled from '@emotion/styled'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../Theming'

const DarkMode = styled(FiMoon)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const DefaultMode = styled(FiSun)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const ThemeToggler = ({ toggleTheme, themeName }) => {
  const theme = useTheme()
  return (
    <button
      css={{
        borderRadius: '50%',
        width: '27px',
        height: '27px',
        padding: 0,
        border: `1px solid ${theme.colors.headerBg}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        color: theme.colors.headerBg,
        background: theme.colors.text,
        outline: 0,
        '@media (hover: hover)': {
          ':hover': {
            border: `1px solid ${theme.colors.text}`,
            color: theme.colors.text,
            background: theme.colors.headerBg
          },
        },
      }}
      aria-label={
        themeName === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
      onClick={() => toggleTheme(themeName === 'dark' ? 'default' : 'dark')}
    >
      {themeName === 'dark' ? (
        <DefaultMode title="Switch to light mode" />
      ) : (
        <DarkMode title="Switch to dark mode" />
      )}
    </button>
  )
}
export default ThemeToggler
