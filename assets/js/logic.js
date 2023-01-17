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

function selectAnswer(event) {
  // Handle what happens when the wrong and correct answers are selected
  if (event.target.dataset.correct === "false") {
    timeLeft -= 2;
    timerEl.textContent = timeLeft;
    feedbackEl.classList.toggle("hide");
    feedbackEl.innerHTML = "Wrong!";
    if (timeLeft < 0) {
      timeLeft = 0;
    }
  } else {
    score += 5;
    feedbackEl.classList.toggle("hide");
    feedbackEl.innerHTML = "Correct!";
  }

  // Add 1 to the currentQuestionIndex variable - so next question
  currentQuestionIndex++;
  // If we don't have any more questions - End the game
  if (shuffledQuestions.length === currentQuestionIndex || timeLeft === 0) {
    clearInterval(timeInterval);
    questionsContainerEl.classList.add("hide");
    // Present the end game screen, and store score
    endScreenContainerEl.classList.remove("hide");
    finalScoreEl.textContent = score;
    submitScore();
  } else {
    showQuestion();
  }
}

function submitScore() {
  // grab the value from the input element
  let initialInputText = initialsInputEl.value.trim();
  // Return from function early if input is blank
  if (initialInputText === "") {
    return;
  }

  // Store the score against the initials in local storage as key value pair
  localStorage.setItem(`${initialInputText}`, JSON.stringify(score));
  showHighScores();
}

submitScoreBtnEl.addEventListener("click", submitScore);

function showHighScores(e) {
  // Go to the high scores page
  window.location.href = "/highscores.html";
  // Get the scores from the local storage
  let storedScores = { ...localStorage };

  for (const property in storedScores) {
    console.log(`${property}: ${storedScores[property]}`);
    let liEl = document.createElement("li");
    liEl.textContent = `${property}: ${storedScores[property]}`;
    highScoresEl.append(liEl);
  }
}
