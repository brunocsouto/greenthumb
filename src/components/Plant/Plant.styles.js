import styled from 'styled-components';
import { colors, thickness } from '../../utils/styles/helpers';

const { grey, white } = colors;
const { normal } = thickness;

const StyledContainer = styled.div`
    background-color: ${white};
    padding: 40px; 
    padding-top: 0;
    width: 280px;
    border-radius: 5px;
    margin:35px
`;

const Image = styled.img`
    max-width: 100%;
    display: block;
    margin: 0 auto -10px auto;
`;

const Name = styled.h2`
    margin: 0px;
    font-weight: bold;
`;

const Price = styled.span`
    color: ${grey};
    font-weight: ${normal};
`;

const DetailsLine = styled.h2`
    margin:20px 0 20px 0;
`;

const FilterIcons = styled.span`
    float: right;
`;

export { StyledContainer, Image, Name, Price, FilterIcons, DetailsLine };