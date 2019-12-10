import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as ArrowIcon } from '../../../../assets/icons/white/arrow.svg';

export default function NavButton(params) {
    const { direction, label } = params;
    const { activeQuestion } = useSelector(state => state);
    const dispatch = useDispatch();
    const { selected } = useSelector(state => state.questions[activeQuestion])

    function setQuestion(type, action) {        
        if(type!=='NONE'){
            return dispatch({
                type: type,
                current: action
            })
        }
    }

    if(direction==='next'){
        if(activeQuestion<2){
            const type = selected ? 'INCREMENT_QUESTION' : 'NONE';
            return (
                <div 
                    className={`button-${direction}`}
                    onClick={() => setQuestion(type, activeQuestion)}
                >
                    <ArrowIcon className="arrow-next" />
                    {label}
                </div>
            )
        }else{
            return (
                <div className={`button-${direction}`}>
                    <ArrowIcon className="arrow-next" />
                    {label}
                </div>

            )
        }
    }else{
        if(direction==='prev'){
            if(activeQuestion>0){
                return (
                    <div 
                        className={`button-${direction}`}
                        onClick={() => setQuestion('DECREMENT_QUESTION', activeQuestion)}
                    >
                        <ArrowIcon className="arrow-prev" />
                        {label}
                    </div>
                )
            }else{
                return (
                    <div className={`button-${direction}`}>
                        <ArrowIcon className="arrow-prev" />
                        {label}
                    </div>
                )
            }
        }else{
            return <div>Error</div>
        }
    }
}
