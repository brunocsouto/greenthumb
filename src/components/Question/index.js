import React from 'react';

import QuestionImage from './QuestionImage';
import QuestionTitle from './QuestionTitle';
import QuestionOptions from './QuestionOptions';
import QuestionNavButtons from './QuestionNavButtons';


function Question() {
  return (<>
    <div className="main main-quiz" >
        <QuestionImage />
        <QuestionTitle />
    </div>
    <div className="question">
      <QuestionOptions />
    </div>
    <div className="navigation">
      <QuestionNavButtons />
    </div>
  </>);
}

export default Question;