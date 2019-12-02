import React from 'react';
import { StyledContainer, Image, Name, Price, FilterIcons, DetailsLine } from './Plant.styles';
import { ReactComponent as ToxicIcon } from '../../assets/icons/grey/toxic.svg';

import ButtonContainer from '../Button/Button.container';

const PlantComponent = ({props}) => {
    return (
        <StyledContainer>
            <Image src={props.url} />
            <Name>{props.name}</Name>
            <DetailsLine>
                <Price>${props.price}</Price>
                <FilterIcons>
                    <ToxicIcon />
                    <ToxicIcon />
                    <ToxicIcon />
                </FilterIcons>
            </DetailsLine>
            <ButtonContainer />
        </StyledContainer>
    )
}

export default PlantComponent;