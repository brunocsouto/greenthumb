import React from 'react';
import { Button } from './Button.styles';
//import { ReactComponent as ArrowIcon } from '../../assets/icons/green/arrow.svg';

const ButtonComponent = ({props}) => {
    return(
        <Button>
            {props.label}
        </Button>
    );
};

export default ButtonComponent;