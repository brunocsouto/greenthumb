import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import NavButton from './NavButton';

// import { Container } from './styles';

export default function QuestionNavButtons() {
    const { questions } = useSelector(state => state)
    const { activeQuestion } = useSelector(state => state);

    function renderButton(direction){
        if(direction==='prev' && activeQuestion===0){
            return (
                <Link to="/">
                    <NavButton direction={direction} label={'home'} />
                </Link>
            )
        }else{
            if(direction==='next' && activeQuestion===2){
                if(questions[0].selected && questions[1].selected && questions[2].selected){
                    const path = `/results?sun=${questions[0].selected}&water=${questions[1].selected}&pets=${questions[2].selected}`;
                    return (
                        <Link to={path}>
                            <NavButton direction={direction} label={'finish'} />
                        </Link>
                    )
                }else{
                    return (
                        <NavButton direction={direction} label={'finish'} />
                    )
                }
            }else{
                return (
                    <NavButton direction={direction} label={direction} />
                );
            }
        }
    }

    return (
        <>
            {renderButton('prev')}
            {renderButton('next')}
        </>
    );
}
