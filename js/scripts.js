// Business Logic

// Save for later
// , adjective, color, personality
function languageDeterminer(difficulty) {
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

  const userEnteredName = document.getElementById("user-name").value;
  const userEnteredDifficulty = document.getElementById("user-difficulty").value;

  let result = languageDeterminer(userEnteredDifficulty);
  document.getElementById("results-user-name").innerText = userEnteredName;
  document.getElementById("results").innerText = result;

  document.getElementById("resultsDiv").removeAttribute("class");
}

function formLoader() {
  let userForm = document.querySelector("#user-data-collector");
  userForm.addEventListener("submit", resultPreparer);
}

window.addEventListener("load", formLoader);
