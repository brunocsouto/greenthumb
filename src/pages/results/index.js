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
        document.body.style.overflow = "auto";
        this.loadPlants();
    }
    
    

    render() {
        const { plants } = this.state;

        const renderPlants = (
            <section className="plant-group">
                <Plants plants={plants} />
            </section>
        )

        return (
            <div className="container-results">
                <div className="logo logo-results">
                    <Link className="btn-home" to="/">
                        <Logo className="logo-image" />
                    </Link>
                </div>
                <div className="main main-results">
                    <img src="./assets/illustrations/pick.png" alt="Pick" />
                    <h1>Our picks for you</h1>
                </div>
                <div className="plants">{renderPlants}</div>
                <div className="empty" />
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