import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Question from '../../components/Question';

import { ReactComponent as Logo } from '../../assets/logo/logo-greenthumb.svg';

export default function Quiz() {
    document.body.style.overflow = 'visible';
    return (
        <div className="containerQuiz">
                <div className="logo logo-quiz">
                    <Link className="btn-home" to="/">
                        <Logo className="logo-image" />
                    </Link>
                </div>
                <Question />
            <div className="empty"/>
        </div>
    );
}
