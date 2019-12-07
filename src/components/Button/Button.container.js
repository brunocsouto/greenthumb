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
        }
    }

    componentDidMount(){
        const label = "buy now";
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