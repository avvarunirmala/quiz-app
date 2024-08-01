import React, { useState } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleGenerate = () => {
    axios.get('https://run.mocky.io/v3/a1f0cb1c-bb60-44f5-932d-310f6ddb4ba6')
      .then(response => {
        console.log(response)
        setQuestions(response.data.questions);
      })
      .catch(error => {
        console.error('There was an error fetching the questions!', error);
      });
  };

  const handleSubmit = () => {
    alert('Questions submitted!');
  };

  return (
    <div className="App">
      <h1>Quiz Generator</h1>
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Provide the URL"
        className="url-input"
      />
      <br />
      <button onClick={handleGenerate}>Generate</button>
      <QuestionList questions={questions} />
      {questions.length > 0 && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
}

export default App;
