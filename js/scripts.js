// Business Logic
function languageDeterminer(difficulty, adjective, color, personality) {
  let userScore = 0;
  let languageResult;

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

  if (userScore) {
    if (userScore === 3) {
      languageResult = "Python";
    } else if (userScore === 4) {
      languageResult = "Ruby";
    } else if (userScore >= 5 && userScore <= 7) {
      languageResult = "Java";
    } else if (userScore >= 8 && userScore <= 9) {
      languageResult = "C";
    }
  } else {
    languageResult = "Error.";
  }

  return languageResult;
}

// User Interface Logic
function formResetter() {
  document.getElementById("user-name").innerText = "";
  document.getElementById("color-dark").checked = false;
  document.getElementById("color-bright").checked = false;
  document.getElementById("personality-extrovert").checked = false;
  document.getElementById("personality-introvert").checked = false;
}

// document.getElementById("resetForm").addEventListener("click", formResetter);

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
  // Resets the form
  formResetter();
}

function formLoader() {
  let userForm = document.querySelector("#user-data-collector");
  userForm.addEventListener("submit", resultPreparer);
}

window.addEventListener("load", formLoader);
