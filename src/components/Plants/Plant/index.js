import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import { StyledContainer, Image, Name, Price, DetailsLine, IconsBox } from './styles';

import Button from '../../Button';
import PlantIcons from './PlantIcons';

const PlantComponent = ({props}) => {
    const path = `/contact/${props.id}`;
    return (
        <StyledContainer className="plant-container">
            <Image src={props.url} />
            <Name>{props.name}</Name>
            <DetailsLine>
                <Price>${props.price}</Price>
                <IconsBox>
                    <PlantIcons data={props}  />
                </IconsBox>
            </DetailsLine>
                <Link to={path} >
                    <Button label="buy now" />
                </Link>
        </StyledContainer>
    )
} 

export default PlantComponent;