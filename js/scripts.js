// Business Logic

// Save for later
// , adjective, color, personality
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

  if (adjective === "general") {
    userScore += 1;
  } else if (adjective === "niche") {
    userScore += 2;
  }

  if (color === "dark") {
    userScore += 1;
  } else if (color === "bright") {
    userScore += 2;
  }

  if (personality === "extrovert") {
    userScore += 1;
  } else if (personality === "introvert") {
    userScore += 2;
  }
  return userScore;
}

// User Interface Logic
function resultPreparer(event) {
  event.preventDefault();
  // Collects user entered data
  const userName = document.getElementById("user-name").value;
  const userDifficulty = document.getElementById("user-difficulty").value;
  const userAdjective = document.getElementById("user-adjective").value;
  const userColor = document.querySelector("input[name='user-color-preference']:checked").value;
  const userPersonality = document.querySelector("input[name='user-personality']:checked").value;
  // Calls language determiner function
  let result = languageDeterminer(userDifficulty, userAdjective, userColor, userPersonality);
  // Displays results to DOM
  document.getElementById("results-user-name").innerText = userName;
  document.getElementById("results").innerText = result;
  // Displays Results Div
  document.getElementById("resultsDiv").removeAttribute("class");
}

function formLoader() {
  let userForm = document.querySelector("#user-data-collector");
  userForm.addEventListener("submit", resultPreparer);
}

window.addEventListener("load", formLoader);
