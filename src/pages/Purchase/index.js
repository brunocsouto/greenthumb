import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo/logo-greenthumb.svg';



export default class Purchase extends Component {
    constructor(){
        super();
        this.state = {
            id: null,
            data: []
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
                console.log(res)
                const {data} = res;
                this.setState({data});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render(){
        const {data} = this.state;
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
                        <div>{data.sun}</div>
                        <div>{data.water}</div>
                        <div>{data.toxicity}</div>
                    </div>
                </div>
                <div className="form">
                    <h1>Nice pick!</h1>
                    <h2>Tell us your name and e-mail and we will get in touch about your order :)</h2>
                    <p>Name</p>
                    <input type="text" placeholder="Crazy Plant Person" />
                    <p>E-mail</p>
                    <input type="text" placeholder="plantperson@email.com" />
                    <button>send</button>
                </div>
            </div>
        )
    }
};