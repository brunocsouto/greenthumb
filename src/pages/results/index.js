import React, { Component } from 'react';
import api from '../../services/api';
import queryString from 'query-string';
import PlantComponent from '../../components/Plant/Plant.component'

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
            <div className="plants">
                <Plants plants={plants} />
            </div>
        )

        return (
            <div>
                <h1>Result</h1>
                <div>{renderPlants}</div>
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