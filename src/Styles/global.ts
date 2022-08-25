import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root, #root > div {
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.background}
}

span, h1, h2, h3, p {
    font-family: Montserrat, sans-serif;    
    color: white;
}

`;
