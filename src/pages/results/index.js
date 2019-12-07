import React, { Component } from 'react';
import api from '../../services/api';
import queryString from 'query-string';
import PlantComponent from '../../components/Plant/Plant.component';

import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo/logo-greenthumb.svg';

export default class results extends Component {
    constructor() {
        super();
        this.state = {
            plants: []
        };
    }

    loadPlants = async () => {
        const params = queryString.parse(this.props.location.search);
        await api.get(`?sun=${params.sun}&water=${params.water}&pets=${false}`)
            .then((response) => {
                const plants = response.data;
                this.setState({ plants });
            })
            .catch((error) => {
                console.log(`Error: ${error.response.data.status} - ${error.response.data.error}`);
        })
    }

    componentDidMount() {
        this.loadPlants();
    }
    
    

    render() {
        const { plants } = this.state;

        const renderPlants = (
            <div>
                <Plants plants={plants} />
            </div>
        )

        return (
            <div className="container-results">
                <Link className="btn-home" to="/">
                    <div className="logo">
                        <Logo className="logo-image" />
                    </div>
                </Link>
                <div className="main">
                    <img src="/assets/illustrations/pick.png" alt="Pick" />
                    <h1>Our picks for you</h1>
                </div>
                <div className="plants">{renderPlants}</div>
            </div>
        )
    }
}

const Plants =  ({plants}) => {
    return (
        <>
            {plants.map(plant => (
                <PlantComponent props={plant} key={plant.id}/>
            ))}  
        </>
    )
}