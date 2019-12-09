import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo/logo-greenthumb.svg';
import Form from '../../components/Form/index';

import { Icon } from '../../components/Plant/Plant.styles';
import { ReactComponent as ToxicIcon } from '../../assets/icons/grey/toxic.svg';
import { ReactComponent as PetIcon } from '../../assets/icons/grey/pet.svg';
import { ReactComponent as HighSunIcon } from '../../assets/icons/grey/high-sun.svg';
import { ReactComponent as LowSunIcon } from '../../assets/icons/grey/low-sun.svg';
import { ReactComponent as OneWaterIcon } from '../../assets/icons/grey/one-drop.svg';
import { ReactComponent as TwoWaterIcon } from '../../assets/icons/grey/two-drops.svg';
import { ReactComponent as ThreeWaterIcon } from '../../assets/icons/grey/three-drops.svg';
import { ReactComponent as NoIcon } from '../../assets/icons/grey/no-answer.svg';


export default class Purchase extends Component {
    constructor(){
        super();
        this.state = {
            id: null,
            data: [],

        }
    }

    componentDidMount(){
        document.body.style.backgroundColor = 'white';
        const { id } = this.props.match.params;
        this.setState({ id });
        this.loadPlant({ id });
    }
    
    loadPlant = async ({ id }) => {
        await api.get(`plant?id=${id}`)
            .then((res) => {
                const {data} = res;
                this.setState({data});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render(){
        const {data, id} = this.state;
        return (
            <div className="container-purchase">
                <div className="logo logo-purchase">
                    <Link className="btn-home" to="/">
                        <Logo className="logo-image" />
                    </Link>
                </div>
                <div className="plant">
                    <h1>{data.name}</h1>
                    <h2>${data.price}</h2>
                    <img src={data.url} alt={data.name} />
                    {FilterIcons(data)}
                </div>
                <div className="form">
                    <Form id={id} />
                </div>
                <div className="empty" />
            </div>
        )
    }
};

const FilterIcons = (props) => { 
    let imgToxic = '';
    if(props.toxicity){
        imgToxic = (
            <Icon className="icon-purchase">
                <ToxicIcon className="iconPlantList" />
                    <span>Toxic for pets</span>
            </Icon>
        );
    }else{
        imgToxic = (
            <Icon className="icon-purchase">
                <PetIcon className="iconPlantList" />
                    <span>Non-toxic for pets</span>
            </Icon>
        );
    };
    let imgSun = '';
    switch(props.sun){
        case 'high':{
            imgSun = (
                <Icon className="icon-purchase">
                    <HighSunIcon className="iconPlantList" />
                    <span>High Sunlight</span>
                </Icon>
            );
            break;
        }
        case 'low':{
            imgSun = (
                <Icon className="icon-purchase">
                    <LowSunIcon className="iconPlantList" />
                <span>Low Sunlight</span>
                </Icon>
            );
            break;
        }
        default: {
            imgSun = (
                <Icon className="icon-purchase">
                    <NoIcon className="iconPlantList" />
                    <span>No Sunlight</span>
                </Icon>
            );
            break;
        }
    }

    let imgWater = '';
    switch(props.water){
        case 'daily':{
            imgWater = (
                <Icon className="icon-purchase">
                    <ThreeWaterIcon className="iconPlantList" />
                    <span>Water daily</span>
                </Icon>
            );
            break;
        }
        case 'regularly':{
            imgWater = (
                <Icon className="icon-purchase">
                    <TwoWaterIcon className="iconPlantList" />
                    <span>Water regularly</span>
                </Icon>
            );
            break;
        }
        case 'rarely':{
            imgWater = (
                <Icon className="icon-purchase">
                    <OneWaterIcon className="iconPlantList" />
                    <span>Water rarely</span>
                </Icon>
                );
            break;
        }
        default:{
            imgWater = (
                <Icon className="icon-purchase">
                    <OneWaterIcon className="iconPlantList" />
                    <span>Water rarely</span>
                </Icon>
                );
            break;
        }
    }

    return (
        <div className="specs">
            {imgSun}           
            {imgWater}
            {imgToxic}
        </div>
    );
};