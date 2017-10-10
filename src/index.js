import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

var person = {
  personName: "visitor",
  personAge: 25,
  personLanguages: [
    "ruby",
    "python",
    "javascript"
  ]
}



ReactDOM.render(
  <Hello
    name={person.personName}
    age={person.personAge}
    languages={person.personLanguages}
  />,
  document.getElementById('root')
)
