"use strict";

let questions = [
  {
    question1: {
      question: "Javascript is an _______ language?",
      answers: [
        "Object-Oriented",
        "Object-Based",
        "Procedural",
        "None of the above",
      ],
      solution() {
        return this.answers[1];
      },
    },
  },
  {
    question2: {
      question:
        "Which of the following methods is used to access HTML elements using Javascript?",
      answers: [
        "getElementById()",
        "querySelector()",
        "Both A and B",
        "Noe of the Above",
      ],
      solution() {
        return this.answers[2];
      },
    },
  },
  {
    question3: {
      question: "How can a datatype be declared to be a constant type?",
      answers: ["const", "var", "let", "constant"],
      solution() {
        return this.answers[0];
      },
    },
  },
  {
    question4: {
      question:
        "Which of the following keywords is used to define a variable in Javascript?",
      answers: ["const", "var", "let", "constant"],
      solution() {
        return this.answers[2];
      },
    },
  },
  {
    question5: {
      question: "What will be the output of print(typeof(NaN))?",
      answers: ["Object", "Number", "String", "None of the above"],
      solution() {
        return this.answers[1];
      },
    },
  },
];

/** Questions from:
 * https://www.javatpoint.com/javascript-mcq
 * https://www.interviewbit.com/javascript-mcq/
 */
