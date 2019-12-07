import React, { Component } from 'react';
import './styles.css';

import { ReactComponent as Logo } from '../../assets/logo/logo-greenthumb.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/white/arrow.svg';

import { Link } from 'react-router-dom';



class Start extends Component {
    render(){
        document.title = "Start quizz - green thumb.";
        return (
            <div className="container">
                <div className="logo">
                    <Logo className="logo-image" />
                </div>
                <div className="main">
                    <h1 className="title">Find your next green friend</h1>
                    <Link to="/quiz">
                        <button id="btn-start">
                            <ArrowIcon className="arrow" stroke="#FFF"/>
                            <div className="label-button">start quizz</div>
                        </button>
                </Link>
                </div>
                <div className="image">
                    <img className="main-image-mobile" src={process.env.PUBLIC_URL + "/assets/illustrations/illustration-home-mobile.png"} alt="green thumb" />
                    <img className="main-image" src={process.env.PUBLIC_URL + "/assets/illustrations/illustration-home.png"} alt="green thumb" />
                </div>
            </div>
        )
    }
};

export default Start;