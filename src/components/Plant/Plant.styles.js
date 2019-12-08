import styled from 'styled-components';
import { colors, thickness } from '../../utils/styles/helpers';

const { grey, white } = colors;
const { normal } = thickness;

const StyledContainer = styled.div`
    background-color: ${white};
    padding: 2rem; 
    padding-top: 0;
    width: 13vw;
    min-width: 11rem;
    border-radius: 5px;
    margin:0.7rem;
    display: inline-block;
    -webkit-box-shadow: 6px 17px 31px -20px rgba(0,0,0,0.56);
    -moz-box-shadow: 6px 17px 31px -20px rgba(0,0,0,0.56);
    box-shadow: 6px 17px 31px -20px rgba(0,0,0,0.56);
`;

const Image = styled.img`
    display: flex;
    max-width: 13rem;
    width:13vw;
    min-width: 10rem;
    margin: 0 auto -10px auto;
`;

const Name = styled.h2`
    margin: 0px;
    font-weight: bold;
    font-size: 1.2rem;
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