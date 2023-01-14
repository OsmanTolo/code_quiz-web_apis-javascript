const startScreenEl = document.querySelector("#start-screen");
const startBtnEl = document.querySelector("#start");
const questionsEl = document.querySelector("#questions");
const questionTitleEl = document.querySelector("#question-title");
const questionChoicesEl = document.querySelector("#choices");

console.log(questions[0].question0.question);

function displayQuestions() {
  questionTitleEl.textContent = questions[0].question0.question;
  let olEl = document.createElement("ol");
  questionsEl.appendChild(olEl);
  let choicesArr = questions[0].question0.choices;
  for (let i = 0; i < choicesArr.length; i++) {
    let liEl = document.createElement("li");
    olEl.appendChild(liEl);
    liEl.textContent = choicesArr[i];
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
  //     // questionsEl.appendChild(olEl);
  //   }
  // }
}

startBtnEl.addEventListener("click", function (e) {
  e.preventDefault();
  // Hide the start screen
  startScreenEl.classList.add("hide");
  // Display the question screen
  questionsEl.classList.remove("hide");
  displayQuestions();
});
