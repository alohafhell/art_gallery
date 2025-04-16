import { createGlobalStyle } from "styled-components";

// This sets styles for the whole app
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 0 80px 0;
    font-family: sans-serif;
    background-color: #f2f2f2;
  }
h1 {
  text-align: center;
 margin: 1.5rem 0;
}

 h2 {
  text-align: center !important;  /* Using !important ensures this rule is applied */
  margin: 0;
  padding: 20px 0;
  background-color: yellow;  
}

  button {
    font-family: inherit;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    outline: none;
  }
`;

export default GlobalStyle;
