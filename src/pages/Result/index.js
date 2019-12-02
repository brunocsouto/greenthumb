import React, { Component } from 'react';
import api from '../../services/api';

export default class Result extends Component {
    constructor() {
        super();
        this.state = {
            sun: "",
            water:"",
            pets: false,
            plants: []
        };
    }

    componentDidMount() {
        this.loadPlants();
    }


    loadPlants = async () => {
        await api.get('?sun=high&water=rarely&pets=false')
            .then((response) => {
                const plants = response.data;
                this.setState({ plants });
                console.log(this.state.plants);
            })
            .catch((error) => {
                console.log(`Error: ${error.response.data.status} - ${error.response.data.error}`);
            })
        
    }

    render() {
        return (
            <div>
                <h1>Result</h1>
            </div>
        )
    }
}