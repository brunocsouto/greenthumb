import React, { Component } from 'react';
import './styles.css';

import { ReactComponent as Logo } from '../../assets/logo/logo-greenthumb.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/white/arrow.svg';

import { Link } from 'react-router-dom';



class Start extends Component {

    startQuiz(){
        console.log("foi");
    }

    render(){
        return (
            <div className="window">
                <div className="container">
                    <div className="parent">
                        <Logo className="logo" />
                        <div className="main">
                            <h1 className="title">Find your next green friend</h1>
                            <Link to="/plants">
                                <button className="btnStart">
                                    <ArrowIcon className="arrow" stroke="#FFF"/>
                                    start quizz
                                </button>
                            </Link>
                        </div>
                        <div className="image" />
                    </div>
                </div>
            </div>
        )
    }
};

export default Start;