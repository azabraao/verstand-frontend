import { createGlobalStyle } from "styled-components";

import Netron from "./assets/fonts/Netron.ttf";
import Gotham from "./assets/fonts/Gotham-Font/GothamMedium.ttf";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: Netron;
        src: url(${Netron})
    }

    @font-face {
        font-family: Gotham;
        src: url(${Gotham})
    }

    * {
        box-sizing: inherit;
    }

    html, 
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, 
    body, 
    div, 
    span, 
    p, 
    strong,
    b,
    main,
    article,
    ul,
    li,
    a {
        font-family: Gotham
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Netron
    }
    
`;

export default GlobalStyles;
