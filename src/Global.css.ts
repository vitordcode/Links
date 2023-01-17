import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #333;
    width: 100vh;
    color: #eee;
    font-family: 'Poppins', sans-serif;
  }
`