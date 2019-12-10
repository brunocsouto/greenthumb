import React from 'react';
import { useSelector } from 'react-redux';

import QuestionOption from './QuestionOption';

// import { Container } from './styles';

export default function QuestionOptions() {
    const { activeQuestion } = useSelector(state => state);
    const { options } = useSelector(state => state.questions[activeQuestion]);

    return(
        options.map((opt, index) => (
            <div className="options" key={index}>
                <QuestionOption option={opt} />
            </div>
        ))
    )

}
