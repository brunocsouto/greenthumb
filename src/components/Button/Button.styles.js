import styled from 'styled-components';
import { colors } from '../../utils/styles/helpers';

const { green, white } = colors;

const Button = styled.button`
    height: 50px;
    width: 100%;
    color: ${green};
    border-radius: 25px;
    border: 2px solid ${green};
    background-color: transparent;
    font-size: 18px;
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

const Arrow = styled.div`
    float:left;
`;

export { Button, Arrow };