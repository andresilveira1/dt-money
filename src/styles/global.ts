import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.green500};
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.gray800};
    color: ${({ theme }) => theme.COLORS.gray100};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`
