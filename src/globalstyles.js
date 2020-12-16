import { createGlobalStyle } from "styled-components";
import BebasNeue from "./assets/fonts/BebasNeue-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Bebas Neue;
    font-style: normal;
    font-weight: 400;
    src: url(${BebasNeue});
  }
  body {
    font-family: Bebas Neue;
  }
`;

export default GlobalStyle;
