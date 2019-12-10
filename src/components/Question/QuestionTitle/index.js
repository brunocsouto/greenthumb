import React from 'react';
import { useSelector } from 'react-redux';

export default function QuestionTitle() {
    const { activeQuestion } = useSelector(state => state);
    const { name } = useSelector(state => state.questions[activeQuestion]);

    switch(name){
        case 'sun': return <h2>First set the amount of <b>sunlight</b> your plant will get.</h2>;
        case 'water': return <h2>How often do you want to <b>water</b> your plant?</h2>
        case 'pets': 
            return(<>
                <h2>Do you have pets? Do they <b>chew</b> plants?</h2>
                <p>We are asking because some plants can be <b>toxic</b> for your buddy.</p>
            </>);
        default: return 'Error';
    }
}
