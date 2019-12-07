import React, { Component } from 'react';
import './styles.css'

import { Link } from 'react-router-dom';


export default class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions: {
                1:{ 
                    id: 'sun', 
                    index: 1,
                    img: './assets/illustrations/sun.png',
                    options: [
                        'high',
                        'low',
                        'no'
                    ],
                    selected: ''
                },
                2:{ 
                    id: 'water', 
                    index: 2,
                    img: './assets/illustrations/wateringcan.png',
                    options: [
                        'daily',
                        'regularly',
                        'rarely'
                    ],
                    selected: ''
                },
                3:{ 
                    id: 'pets', 
                    index: 3,
                    img:'./assets/illustrations/dog.png',
                    options: [
                        'true',
                        'false'
                    ],
                    selected: ''
                }
            },
            total: 3,
            current: 1
        }
    }

    handleOptionChange = (index, label) => {
        const {questions} = this.state;
        questions[index].selected = label;
        this.setState({questions});
    }

    handleQuestionChange = (params) => {
        let current = params[0];
        const action = params[1];
        const {questions} = this.state;
        const {selected} = questions[current];

        switch(current){
            case 1: {
                if(selected) {
                    questions[current].selected = selected;
                    current++;
                    this.setState({questions, current});
                }
                break;
            }
            case 2: {
                if(action === 'next'){
                    if(selected) {
                        questions[current].selected = selected;
                        current++;
                        this.setState({questions, current});
                    }
                }else{
                    if(action === 'prev') {
                        questions[current].selected = '';
                        current--;
                        questions[current].selected = '';
                        this.setState({questions, current});
                    }
                }
                break;
            }
            case 3: {
                questions[current].selected = '';
                current--;
                questions[current].selected = '';
                this.setState({questions, current});
                break;
            }
            default: {
                if(selected) {
                    questions[current].selected = selected;
                    current++;
                    this.setState({questions, current});
                }
                break;
            }
        }
    }

    renderButtons = () => {
        const { current } = this.state;
        switch(current){
            case 1: {
                return (
                    <>
                    <Link to="/">
                        <div className="optionButton buttonPrev" >
                            home
                        </div>
                    </Link>
                    <div 
                        className="optionButton buttonNext"
                        onClick={this.handleQuestionChange.bind(this, [current, 'next'])}
                    >
                        next
                    </div>
                    </>
                );
            }
            case 2: {
                return (
                    <>
                    <div 
                        className="optionButton buttonPrev"
                        onClick={this.handleQuestionChange.bind(this, [current, 'prev'])}
                    >
                        prev
                    </div>
                    <div 
                        className="optionButton buttonNext"
                        onClick={this.handleQuestionChange.bind(this, [current, 'next'])}
                    >
                        next
                    </div>
                    </>
                );
            }
            case 3: {
                const {questions} = this.state;
                let path="/results"
                if(questions[1].selected && questions[2].selected && questions[3].selected){
                    path += `?sun=${questions[1].selected}&water=${questions[2].selected}&pets=${questions[3].selected}`;
                }
                return (
                    <>
                    <div 
                        className="optionButton buttonPrev"
                        onClick={this.handleQuestionChange.bind(this, [current, 'prev'])}
                    >
                        prev
                    </div>
                    <Link to={path}>
                        <div 
                            className="optionButton buttonNext"
                            onClick={this.handleQuestionChange.bind(this, [current, 'next'])}
                        >
                            finish
                        </div>
                    </Link>
                    </>
                );
            }
            default: {
                return (
                    <>
                    <Link to="/">
                        <div className="optionButton buttonPrev" >
                            home
                        </div>
                    </Link>
                    <div 
                        className="optionButton buttonNext"
                        onClick={this.handleQuestionChange.bind(this, [current, 'next'])}
                    >
                        next
                    </div>
                    </>
                );
            }
        }
    }

    renderIntroduction = () => {
        const { questions, current } = this.state;
        switch(current){
            case 1:{
                return (
                    <div>
                        <img src={questions[current].img} alt={questions[current].id} />
                        <h2>First set the amount of <b>sunlight</b> your plant will get.</h2>
                    </div>
                );
                break;
            }
            case 2:{
                return (
                    <div>
                        <img src={questions[current].img} alt={questions[current].id} />
                        <h2>How often do you want to <b>water</b> your plant?</h2>
                    </div>
                );
                break;
            }
            default: {
                return (
                    <div>
                        <img src={questions[current].img} alt={questions[current].id} />
                        <h2>Do you have pets? Do they <b>chew</b> plants?</h2>
                        <p>We are asking because some plants can be <b>toxic</b> for your buddy.</p>
                    </div>
                );
                break;
            }
        }
    }


    
    render() {
        const { questions, current } = this.state;
        const question = questions[current];
        const renderQuestions =  (
            <div className="question">
                <Question 
                    question={question} 
                    handleOptionChange= {
                        this.handleOptionChange.bind(this, current)
                    } 
                />
            </div>
        )

        return (
            <div id="questionBlock" className="questionBlock">
                {this.renderIntroduction()}
                {renderQuestions}
                {this.renderButtons()}
            </div>
        )
    }
}

const Question = ({ handleOptionChange, question }) => {
    const { options, selected } = question;
    return(
        <>
        {options.map((option, index) => (
            <Option 
                label={option} 
                selected={selected}
                handleOptionChange= { 
                    handleOptionChange
                }
                key={`${option}_${index}`} 
            />
        ))}
        </>
    )
}

const Option = ({ handleOptionChange, label, selected }) => {
    const classNameSelected = (selected === label) ? "optionButton selected": "optionButton" ;
    return(
        <div className={classNameSelected} onClick={handleOptionChange.bind(this, label)}>{label}</div>
    )
}