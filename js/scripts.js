// Business Logic

// function languageDeterminer() {

// }

// User Interface Logic
function resultPreparer(event) {
  event.preventDefault();
}

function formLoader() {
  let userForm = document.querySelector("#user-data-collector");
  userForm.addEventListener("submit", resultPreparer);
}

window.addEventListener("load", formLoader);
