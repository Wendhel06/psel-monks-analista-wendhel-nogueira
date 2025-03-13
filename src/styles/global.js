import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Helvetica Neue';
    src: url('../../public/fonts/HelveticaNeue-Bold.woff2') format('woff2'),
        url('HelveticaNeue-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Helvetica Neue';
    src: url('../../public/fonts/HelveticaNeue-UltraLight.woff2') format('woff2'),
        url('HelveticaNeue-UltraLight.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

* {
  box-sizing: border-box;
  margin: 0px;
  padding:0px;
}

.container {
  width: 100%;
  margin: 0 auto;
  max-width: 1410px;
  background-color: blue;
}

h1, h2, h3, h4 {
  font-family: "Helvetica Neue", sans-serif;
  font-weight: bold;
  letter-spacing: -2%;
}

`;
