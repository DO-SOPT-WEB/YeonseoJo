import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
#root, body, html {
    width:100%;
    height: 100vh;
    margin: 0 auto;
}
  
*, button, span, p, h1, h2, h3, div, section, article {
   font-family: 'KOTRAHOPE';
    box-sizing: border-box;
}

button {
    border: none;
    box-sizing: border-box;

    cursor: pointer;
}
    
`;

export default GlobalStyle;
