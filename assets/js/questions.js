"use strict";

let questions = [
  {
    question0: {
      question: "Javascript is an _______ language?",
      choices: [
        "Object-Oriented",
        "Object-Based",
        "Procedural",
        "None of the above",
      ],
      solution() {
        return this.choices[1];
      },
    },
  },
  {
    question1: {
      question:
        "Which of the following methods is used to access HTML elements using Javascript?",
      choices: [
        "getElementById()",
        "querySelector()",
        "Both A and B",
        "Noe of the Above",
      ],
      solution() {
        return this.choices[2];
      },
    },
  },
  {
    question2: {
      question: "How can a datatype be declared to be a constant type?",
      choices: ["const", "var", "let", "constant"],
      solution() {
        return this.choices[0];
      },
    },
  },
  {
    question3: {
      question:
        "Which of the following keywords is used to define a variable in Javascript?",
      choices: ["const", "var", "let", "constant"],
      solution() {
        return this.choices[2];
      },
    },
  },
  {
    question4: {
      question: "What will be the output of print(typeof(NaN))?",
      choices: ["Object", "Number", "String", "None of the above"],
      solution() {
        return this.choices[1];
      },
    },
  },
];

/** Questions from:
 * https://www.javatpoint.com/javascript-mcq
 * https://www.interviewbit.com/javascript-mcq/
 */
