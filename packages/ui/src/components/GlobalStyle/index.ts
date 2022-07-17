import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        min-width: 100%;
        height: 100%;
        background-color: transparent !important;
        background: transparent !important;
        padding: 0;
        margin: 0;
    }

    * {
        box-sizing: border-box;
        font-variant: normal !important;
    }
`;

export default GlobalStyle;
