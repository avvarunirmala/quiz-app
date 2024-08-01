import React from 'react';
import './Question.css';

const Question = ({ question, options, index }) => (
    <div className="question-block">
        <h3>{index + 1}. {question}</h3>
        <ul>
            {options.map((option, idx) => (
                <li key={idx}>
                    <input
                        type="radio"
                        id={`q${index}-option${idx}`}
                        name={`q${index}`}
                        value={option}
                    />
                    <label htmlFor={`q${index}-option${idx}`}>{option}</label>
                </li>
            ))}
        </ul>
    </div>
);

export default Question;
