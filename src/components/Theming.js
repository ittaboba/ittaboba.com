import { createTheming } from '@callstack/react-theme-provider'
import colors from '../lib/colors'

import LogoDark from "../../src/images/logo-dark.svg"
import LogoLight from "../../src/images/logo-light.svg"

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.white,
      text: colors.black,
      bodyBg: colors.white,
      headerBg: colors.white,
      link: colors.red,
      ...colors,
    },
    logo: LogoDark
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: colors.black,
      text: colors.white,
      bodyBg: colors.black,
      headerBg: colors.black,
      link: colors.red,
      ...colors,
    },
    logo: LogoLight
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
