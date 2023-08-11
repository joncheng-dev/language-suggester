// Business Logic

function languageDeterminer(difficulty, adjective, color, personality) {
  let userScore = 0;
  if (difficulty === "easy") {
    userScore += 0;
  } else if (difficulty === "low") {
    userScore += 1;
  } else if (difficulty === "medium") {
    userScore += 2;
  } else if (difficulty === "high") {
    userScore += 3;
  }
  return userScore;
}

// User Interface Logic
function resultPreparer(event) {
  event.preventDefault();

  const userEnteredName = document.querySelector("input#user-name").value;
}

function formLoader() {
  let userForm = document.querySelector("#user-data-collector");
  userForm.addEventListener("submit", resultPreparer);
}

window.addEventListener("load", formLoader);
