import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

import { StyledContainer, Image, Name, Price, DetailsLine, IconsBox, Icon } from './Plant.styles';
import { ReactComponent as ToxicIcon } from '../../assets/icons/grey/toxic.svg';
import { ReactComponent as HighSunIcon } from '../../assets/icons/grey/high-sun.svg';
import { ReactComponent as LowSunIcon } from '../../assets/icons/grey/low-sun.svg';
import { ReactComponent as OneWaterIcon } from '../../assets/icons/grey/one-drop.svg';
import { ReactComponent as TwoWaterIcon } from '../../assets/icons/grey/two-drops.svg';
import { ReactComponent as ThreeWaterIcon } from '../../assets/icons/grey/three-drops.svg';
import { ReactComponent as NoIcon } from '../../assets/icons/grey/no-answer.svg';

import ButtonContainer from '../Button/Button.container';

const PlantComponent = ({props}) => {
    const path = `/contact/${props.id}`;
    return (
        <StyledContainer className="plant-container">
            <Image src={props.url} />
            <Name>{props.name}</Name>
            <DetailsLine>
                <Price>${props.price}</Price>
                <IconsBox>
                    <FilterIcons props={props} />
                </IconsBox>
            </DetailsLine>
                <Link to={path} >
                    <ButtonContainer />
                </Link>
        </StyledContainer>
    )
}

export default PlantComponent;

const FilterIcons = ({props}) => { 
    const imgToxic = props.toxicity ? <Icon><ToxicIcon /></Icon> : <></>;
    let imgSun = '';
    switch(props.sun){
        case 'high':{
            imgSun = <Icon><HighSunIcon className="iconPlantList" /></Icon>;
            break;
        }
        case 'low':{
            imgSun = <Icon><LowSunIcon className="iconPlantList" /></Icon>;
            break;
        }
        default: {
            imgSun = <Icon><NoIcon className="iconPlantList" /></Icon>;
            break;
        }
    }

    let imgWater = '';
    switch(props.water){
        case 'daily':{
            imgWater = <Icon><ThreeWaterIcon className="iconPlantList" /></Icon>;
            break;
        }
        case 'regularly':{
            imgWater = <Icon><TwoWaterIcon className="iconPlantList" /></Icon>;
            break;
        }
        case 'rarely':{
            imgWater = <Icon><OneWaterIcon className="iconPlantList" /></Icon>;
            break;
        }
        default:{
            imgWater = <Icon><OneWaterIcon className="iconPlantList" /></Icon>;
            break;
        }
    }

    return (
        <div>
            {imgWater}
            {imgSun}
            {imgToxic}
        </div>
    );
};