import React, { Component } from 'react';

import PlantComponent from './Plant.component';
import api from '../../services/api';

class PlantContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            name: "",
            sun: "",
            water: "",
            url: "",
            price: 0,
            toxicity: false
        }
    }

    componentDidMount() {
        const { id } = this.props;
        this.setState({ id });
        this.loadPlant({ id });
    }

    loadPlant = async ({ id }) => {
        await api.get(`plant?id=${id}`)
            .then((res) => {
                const {
                    name, 
                    sun,
                    water,
                    url,
                    price,
                    toxicity
                } = res.data;
                this.setState({name, sun, water, url, price, toxicity});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const props = this.state;
        return (
            <PlantComponent props={props} />
        )
    }
}

export default PlantContainer;