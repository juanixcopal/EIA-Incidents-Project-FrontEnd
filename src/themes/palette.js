/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  return {
    mode: theme?.customization?.navType,
    common: {
      black: theme.colors?.darkPaper
    },
    primary: {
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark,
      50: theme.colors?.primary50,
      100: theme.colors?.primary100,
      200: theme.colors?.primary200,
      300: theme.colors?.primary300,
      400: theme.colors?.primary400,
      500: theme.colors?.primary500,
      600: theme.colors?.primary600,
      700: theme.colors?.primary700,
      800: theme.colors?.primary800
    },
    error: {
      main: theme.colors?.errorMain,
      50: theme.colors?.error50,
      100: theme.colors?.error100,
      200: theme.colors?.error200,
      300: theme.colors?.error300,
      400: theme.colors?.error400,
      500: theme.colors?.error500,
      700: theme.colors?.error700,
      800: theme.colors?.error800,
      900: theme.colors?.error900
    },
    high: {
      main: theme.colors?.highMain,
      50: theme.colors?.high50,
      100: theme.colors?.high100,
      200: theme.colors?.high200,
      300: theme.colors?.high300,
      400: theme.colors?.high400,
      500: theme.colors?.high500,
      700: theme.colors?.high700,
      800: theme.colors?.high800,
      900: theme.colors?.high900
    },
    medium: {
      main: theme.colors?.mediumMain,
      50: theme.colors?.medium50,
      100: theme.colors?.medium100,
      200: theme.colors?.medium200,
      300: theme.colors?.medium300,
      400: theme.colors?.medium400,
      500: theme.colors?.medium500,
      600: theme.colors?.medium600,
      800: theme.colors?.medium800,
      900: theme.colors?.medium900
    },
    success: {
      main: theme.colors?.successMain,
      50: theme.colors?.success50,
      100: theme.colors?.success100,
      200: theme.colors?.success200,
      300: theme.colors?.success300,
      400: theme.colors?.success400,
      500: theme.colors?.success500,
      700: theme.colors?.success700,
      800: theme.colors?.success800,
      900: theme.colors?.success900
    },
    informative: {
      main: theme.colors?.informativeMain,
      50: theme.colors?.informative50,
      100: theme.colors?.informative100,
      200: theme.colors?.informative200,
      300: theme.colors?.informative300,
      400: theme.colors?.informative400,
      600: theme.colors?.informative600,
      700: theme.colors?.informative700,
      800: theme.colors?.informative800,
      900: theme.colors?.informative900
    },
    warning: {
      main: theme.colors?.warningMain,
      light: theme.colors?.warningLight,
      dark: theme.colors?.warningDark
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      200: theme.colors?.grey200,
      300: theme.colors?.grey300,
      500: theme.colors?.grey500,
      600: theme.colors?.grey600,
      700: theme.colors?.grey700,
      900: theme.colors?.grey900
    },
    text: {
      hint: theme.colors?.grey100,
      primary: theme.darkTextPrimary,
      secondary: theme.darkTextSecondary,
      dark: theme.textDark
    },
    background: {
      paper: theme.paper,
      default: theme.backgroundDefault
    }
  }
}
