"use strict";

let questions = [
  {
    question: "Javascript is an _______ language?",
    answers: [
      { text: "Object-Oriented", correct: true },
      { text: "Object-Based", correct: false },
      { text: "Procedural", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    answers: [
      { text: "constant", correct: false },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
    ],
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript??",
    answers: [
      { text: "getElementById()", correct: false },
      { text: "querySelector()", correct: false },
      { text: "Both 1 and 2", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: `How do you write "Hello World" in an alert box?`,
    answers: [
      {
        text: `alert("Hello World")`,
        correct: true,
      },
      { text: `alertBox("Hello World")`, correct: false },
      { text: `msgBox("Hello World")`, correct: false },
      { text: `msg("Hello World")`, correct: false },
    ],
  },
];

/** Questions from:
 * https://www.javatpoint.com/javascript-mcq
 * https://www.interviewbit.com/javascript-mcq/
 */
