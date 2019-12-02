import React, { Component } from 'react';
import ButtonComponent from './Button.component';

class ButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrow: false,
            label: "",
            fill: false,
            to: "",
            // params
        }
    }

    componentDidMount(){
        const label = "next";
        this.setState({label});
    }

    render() {
        const props = this.state;
        return(
            <ButtonComponent props={props}/>
        )
    }
};

export default ButtonContainer;