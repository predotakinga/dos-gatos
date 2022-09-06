import { createGlobalStyle } from "styled-components";

import MagilioRegular from "./MagilioRegular.woff";
import MagilioRegular2 from "./MagilioRegular.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Magilio';
        src: local('Magilio Name'), local('Magilio'),
        url(${MagilioRegular2}) format('woff2'),
        url(${MagilioRegular}) format('woff');
        // font-weight: 300;
        // font-style: normal;
    }
`;
