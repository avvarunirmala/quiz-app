import React from 'react';
import Question from './Question';

const QuestionList = ({ questions }) => (
    <div className="questions">
        {questions.map((q, index) => (
            <Question key={index} question={q.question} options={q.options} index={index} />
        ))}
    </div>
);

export default QuestionList;
