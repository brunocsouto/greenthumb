import React, { Component } from 'react';
import './styles.css'

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo/logo-greenthumb.svg';


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
                        { value:'high', label: 'High Sunlight'},
                        { value:'low', label: 'Low Sunlight'},
                        { value:'no', label: 'No Sunlight'},
                    ],
                    selected: ''
                },
                2:{ 
                    id: 'water', 
                    index: 2,
                    img: './assets/illustrations/wateringcan.png',
                    options: [
                        { value:'daily', label: 'Rarely'},
                        { value:'regularly', label: 'Regularly'},
                        { value:'rarely', label: 'Daily'},
                    ],
                    selected: ''
                },
                3:{ 
                    id: 'pets', 
                    index: 3,
                    img:'./assets/illustrations/dog.png',
                    options: [
                        { value:'true', label: 'Yes'},
                        { value:'false', label: "No/They don't care"},
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
                    <div className="navigation">
                        <Link to="/">
                            <div className="buttonPrev" >
                                home
                            </div>
                        </Link>
                        <div 
                            className="buttonNext"
                            onClick={this.handleQuestionChange.bind(this, [current, 'next'])}
                        >
                            next
                        </div>
                    </div>
                );
            }
            case 2: {
                return (
                    <div className="navigation">
                        <div 
                            className="buttonPrev"
                            onClick={this.handleQuestionChange.bind(this, [current, 'prev'])}
                        >
                            prev
                        </div>
                        <div 
                            className="buttonNext"
                            onClick={this.handleQuestionChange.bind(this, [current, 'next'])}
                        >
                            next
                        </div>
                    </div>
                );
            }
            case 3: {
                const {questions} = this.state;
                let path="/results"
                if(questions[1].selected && questions[2].selected && questions[3].selected){
                    path += `?sun=${questions[1].selected}&water=${questions[2].selected}&pets=${questions[3].selected}`;
                }
                return (
                    <div className="navigation">
                        <div 
                            className="buttonPrev"
                            onClick={this.handleQuestionChange.bind(this, [current, 'prev'])}
                        >
                            prev
                        </div>
                        <Link to={path}>
                            <div 
                                className="buttonNext"
                                onClick={this.handleQuestionChange.bind(this, [current, 'next'])}
                            >
                                        finish
                            </div>
                        </Link>
                    </div>
                );
            }
            default: {
                return (
                    <div className="navigation">
                        <Link to="/">
                            <div className="buttonPrev" >
                                home
                            </div>
                        </Link>
                        <div 
                            className="buttonNext"
                            onClick={this.handleQuestionChange.bind(this, [current, 'next'])}
                        >
                            next
                        </div>
                    </div>
                );
            }
        }
    }

    renderIntroduction = () => {
        const { questions, current } = this.state;
        switch(current){
            case 1:{
                return (
                    <div className="main main-quiz">
                        <img src={questions[current].img} alt={questions[current].id} />
                        <h2>First set the amount of <b>sunlight</b> your plant will get.</h2>
                    </div>
                );
                break;
            }
            case 2:{
                return (
                    <div className="main main-quiz">
                        <img src={questions[current].img} alt={questions[current].id} />
                        <h2>How often do you want to <b>water</b> your plant?</h2>
                    </div>
                );
                break;
            }
            default: {
                return (
                    <div className="main main-quiz">
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
        document.title = "Quiz - green thumb.";
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
            <div className="containerQuiz">
                    <div className="logo logo-quiz">
                        <Link className="btn-home" to="/">
                            <Logo className="logo-image" />
                        </Link>
                    </div>
                {this.renderIntroduction()}
                {renderQuestions}
                {this.renderButtons()}
                <div className="empty"/>
            </div>
        )
    }
}

const Question = ({ handleOptionChange, question }) => {
    const { options, selected, id } = question;
    return(
        <>
        {options.map((option, index) => (
            <div className="options" key={`${option.value}_${index}`} >
                <Option 
                    label={option.label}
                    value={option.value}
                    question={id} 
                    selected={selected}
                    handleOptionChange= { 
                        handleOptionChange
                    }
                />
            </div>
        ))}
        </>
    )
}

const Option = ({ handleOptionChange, label, selected, value, question }) => {
    const classNameSelected = (selected === value) ? `optionButton selected option-${question}`: `optionButton option-${question}` ;
    return(
        <div className={classNameSelected} onClick={handleOptionChange.bind(this, value)}>{label}</div>
    )
}