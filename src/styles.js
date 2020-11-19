import { createGlobalStyle } from "styled-components";

import Netron from "./assets/fonts/Netron.ttf";
import Gotham from "./assets/fonts/Gotham-Font/GothamLight.ttf";

const GlobalStyles = createGlobalStyle`
    .body-no-scroll {
        overflow: hidden;
        position: relative;
        height: 100%; 
    }

    @font-face {
        font-family: Netron;
        src: url(${Netron})
    }

    @font-face {
        font-family: Gotham;
        src: url(${Gotham})
    }

    html,
    body,
    p,
    ol,
    ul,
    li,
    dl,
    dt,
    dd,
    blockquote,
    figure,
    fieldset,
    legend,
    textarea,
    pre,
    iframe,
    hr,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        padding: 0
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: normal
    }

    ul {
        list-style: none
    }

    button,
    input,
    select,
    textarea {
        margin: 0
    }

    html {
        box-sizing: border-box
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit
    }

    img,
    video {
        height: auto;
        max-width: 100%
    }

    iframe {
        border: 0
    }

    table {
        border-collapse: collapse;
        border-spacing: 0
    }

    td,
    th {
        padding: 0;
        text-align: left
    }
    
    html,
    body {
        font-size: 16px;
        line-height: 1.5;
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
    a,
    input {
        font-family: Gotham;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Netron
    }

    .container {
        padding: 0 16px;
        max-width: 768px;
        margin: 0 auto
    }
    

    ul li:before {
        content: " - ";
    }

    ul {
        margin-bottom: 16px
    }

    ul li {
        padding-left: 16px;
    }

`;

export default GlobalStyles;
