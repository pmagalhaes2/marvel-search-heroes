import { createGlobalStyle } from "styled-components";
import "@fontsource/work-sans";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  :focus {
    outline: none;
  }

  body, html, button {
    height: 100%;
    font-family: "Work Sans", sans-serif;
  }
`;
