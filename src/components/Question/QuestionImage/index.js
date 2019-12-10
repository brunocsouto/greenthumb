import React from 'react';
import { useSelector } from 'react-redux';

export default function QuestionImage() {
    const { activeQuestion } = useSelector(state => state);
    const { img } = useSelector(state => state.questions[activeQuestion]);
    const path =    !process.env.PUBLIC_URL ? img :
                     process.env.PUBLIC_URL + img.substring(1);

    return (<img src={path} alt={img} />)
}
