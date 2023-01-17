const highScoresEl = document.querySelector("#highscores");
const clearScoreBtnEl = document.querySelector("#clear");

function scores() {
  // Get the scores from the local storage
  let storedScores = { ...localStorage };
  console.log(storedScores);

  for (const property in storedScores) {
    // console.log(`${property}: ${storedScores[property]}`);
    let liEl = document.createElement("li");
    liEl.textContent = `${property} - ${storedScores[property]}`;
    highScoresEl.appendChild(liEl);
  }
}
scores();

// Clear score when the btn is pressed
clearScoreBtnEl.addEventListener("click", function () {
  localStorage.clear();
  highScoresEl.innerHTML = "";
});
