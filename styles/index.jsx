import { createGlobalStyle } from "styled-components";

// This sets styles for the whole app
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #f2f2f2;
  }

  h1 {
    text-align: center;
  }
`;

export default GlobalStyle;
