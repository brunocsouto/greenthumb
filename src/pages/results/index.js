import React, { Component } from 'react';
import api from '../../services/api';
import queryString from 'query-string';

import './styles.css';
import { Link } from 'react-router-dom';
import Plants from '../../components/Plants';
import { ReactComponent as Logo } from '../../assets/logo/logo-greenthumb.svg';

export default class Results extends Component {
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
        document.body.style.overflowY = "auto";
        this.loadPlants();
    }
    

    render() {
        document.title = "Results - green thumb.";
        const { plants } = this.state;

        return (
            <div className="container-results">
                <div className="logo logo-results">
                    <Link className="btn-home" to="/">
                        <Logo className="logo-image" />
                    </Link>
                </div>
                <div className="main main-results">
                    <img src={process.env.PUBLIC_URL + "/assets/illustrations/pick.png"} alt="Pick" />
                    <h1>Our picks for you</h1>
                </div>
                <div className="plants">
                    <section className="plant-group">
                        <Plants plants={plants} />
                    </section>
                </div>
                <div className="empty" />
            </div>
        )
    }
}