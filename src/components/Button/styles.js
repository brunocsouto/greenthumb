import styled from 'styled-components';
import { colors, thickness } from '../../utils/styles/helpers';

const { green, white } = colors;
const { thin } = thickness;

const ButtonElm = styled.button`
    height: 50px;
    width: 100%;
    color: ${white};
    border-radius: 25px;
    border: 2px solid ${green};
    background-color: ${green};
    font-size: 18px;
    font-weight: ${thin};
    padding: 0 30px 0 30px;

    &:hover {
        background-color: ${green};
        color:${white};
        stroke: ${white};
        cursor: pointer;
        transition-timing-function: ease;
        transition-duration: 0.2s;
    }
`;

export { ButtonElm };