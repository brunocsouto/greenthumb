import { createGlobalStyle } from 'styled-components';
import { colors } from './helpers';

const { gray, green } = colors;
const fontFamily = "'Montserrat', sans-serif";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
    }

    body {
        font-family: ${fontFamily};
        background-color: ${gray};
        color: ${green};
    }

    button {
        font-family: ${fontFamily};
    }
`;