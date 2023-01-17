"use strict";

const startScreenContainerEl = document.querySelector("#start-screen");
const startBtnEl = document.querySelector("#start");
const questionsContainerEl = document.querySelector("#questions");
const questionTitleEl = document.querySelector("#question-title");
const questionChoicesEl = document.querySelector("#choices");
const feedbackEl = document.querySelector("#feedback");
const timerEl = document.querySelector("#time");
const endScreenContainerEl = document.querySelector("#end-screen");
const finalScoreEl = document.querySelector("#final-score");
const initialsInputEl = document.querySelector("#initials");
const submitScoreBtnEl = document.querySelector("#submit");
const highScoresEl = document.querySelector("ol");

let shuffledQuestions = questions.sort(() => Math.random() - 0.5);
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 20;
let timeInterval;

startBtnEl.addEventListener("click", startQuiz);

function startQuiz() {
  // Hide the start screen
  startScreenContainerEl.classList.add("hide");

  // Start countdown
  timeInterval = setInterval(function () {
    timeLeft--;
    // Display the time
    timerEl.textContent = timeLeft;
    // Clear the time interval
    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
  showQuestion();
}

function showQuestion() {
  feedbackEl.classList.remove("hide");
  let currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionTitleEl.textContent = currentQuestion.question;

  // Clear the choices container
  answerChoicesContainer.innerHTML = "";
  // Loop through the question choices to populate them in the window
  currentQuestion.answers.forEach((answer, index) => {
    let answersBtn = document.createElement("button");
    answersBtn.dataset.correct = answer.correct;
    answersBtn.addEventListener("click", selectAnswer);

    // Set the content of the button to be content of the answers element
    answersBtn.textContent = index + 1 + ". " + answer.text;
    answerChoicesContainer.appendChild(answersBtn);
  });
}

function selectChoice() {}

/*
function displayQuestions() {
  // Display the question screen
  questionsContainerEl.classList.remove("hide");
  questionTitleEl.textContent = questions[0].question0.question;
  let olEl = document.createElement("ol");
  questionsContainerEl.appendChild(olEl);
  let choicesArr = questions[0].question0.choices;
  for (let i = 0; i < choicesArr.length; i++) {
    let liEl = document.createElement("li");
    olEl.appendChild(liEl);
    liEl.innerHTML = choicesArr[i];
  }
  // liEl.textContent = questions[0].question0.choices;
  // olEl.textContent = element[key].question;

  // for (let i = 0; i < questions.length; i++) {
  //   const element = questions[i];
  //   for (const key in element) {
  //     console.log(element[key].question);
  //     // console.log(element[key].choices);
  //     // console.log(element[key].solution());
  //     // olEl.textContent = element[key].question;
  //     // questionsContainerEl.appendChild(olEl);
  //   }
  // }
}
*/
