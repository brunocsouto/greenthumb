import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as HighSun } from '../../../../assets/icons/coral/high-sun.svg';
import { ReactComponent as LowSun } from '../../../../assets/icons/coral/low-sun.svg';
import { ReactComponent as NoAnswer } from '../../../../assets/icons/coral/no-answer.svg';
import { ReactComponent as OneDrop } from '../../../../assets/icons/grey/one-drop.svg';
import { ReactComponent as TwoDrops } from '../../../../assets/icons/grey/two-drops.svg';
import { ReactComponent as ThreeDrops } from '../../../../assets/icons/grey/three-drops.svg';
import { ReactComponent as Pet } from '../../../../assets/icons/grey/pet.svg';


export default function QuestionOption(param) {
    const { option, label } = param.option;
    const { activeQuestion } = useSelector(state => state);
    const { selected, name } = useSelector(state => state.questions[activeQuestion])
    const dispatch = useDispatch();

    const selectedOption = (selected && selected === option) ? 'selected': '';

    function renderIcon(){
        switch(option){
            case 'high': return <HighSun />;
            case 'low': return <LowSun />;
            case 'no': return <NoAnswer />;
            case 'daily': return <ThreeDrops />;
            case 'regularly': return <TwoDrops />;
            case 'rarely': return <OneDrop />;
            case 'true': return <Pet />;
            case 'false': return <NoAnswer />;
            default: return 'Error';
        }
    }
    
    function setOption(type){
        return dispatch({
            type: type,
            value: option,
            question: activeQuestion
        })
    }


    return(
        <div 
            className={`${selectedOption} option-${name} optionButton`}
            onClick={() => setOption('SELECT_OPTION')}
        >
            <div className="option-icon">{renderIcon(option)}</div>
            <div className="option-label">{label}</div>
        </div>
    )
}
