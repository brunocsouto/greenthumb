import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo/logo-greenthumb.svg';
import Form from '../../components/Form/index';
import ContactIcons from '../../components/ContactIcons';


export default class Contact extends Component {
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
            .then((response) => {
                const {data} = response;
                this.setState({data});
            })
            .catch((error) => {
                console.log(`Error: ${error.response.data.status} - ${error.response.data.error}`);
            })
    } 

    render(){
        document.title = "Contact - green thumb.";
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
                    <div className="specs">
                        <ContactIcons className="icon-purchase" data={data} />
                    </div>
                </div>
                <div className="form">
                    <Form id={id} />
                </div>
                <div className="empty" />
            </div>
        )
    }
};