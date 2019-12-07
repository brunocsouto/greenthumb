import styled from 'styled-components';
import { colors, thickness } from '../../utils/styles/helpers';

const { grey, white } = colors;
const { normal } = thickness;

const StyledContainer = styled.div`
    background-color: ${white};
    padding: 3rem; 
    padding-top: 0;
    width: 70vw;
    max-width: 30rem;
    border-radius: 5px;
    margin:1rem;
`;

const Image = styled.img`
    display: block;
    margin: 0 auto -10px auto;
`;

const Name = styled.h2`
    margin: 0px;
    font-weight: bold;
    color: #15573F;
`;

const Price = styled.span`
    color: ${grey};
    font-weight: ${normal};
`;

const DetailsLine = styled.h2`
    margin:20px 0 20px 0;
`;

const IconsBox = styled.span`
    float:right;
`;

const Icon = styled.div`
    padding-left: 10px;
    float: right;
`;


export { StyledContainer, Image, Name, Price, DetailsLine, IconsBox, Icon };