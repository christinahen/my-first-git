const userInputs = document.getElementById("userInputs");
const nameInput = document.getElementById("nameText");
const ageInput = document.getElementById("ageNumber");
const colorInput = document.getElementById("colorInput");
const countryInput = document.getElementById("countryInput");
const genderMaleInput = document.getElementById("male");
const genderFemaleInput = document.getElementById("female");

function display() {
  userInputs.innerHTML +=
    ` <div class="card" style="width: 18rem background-color;">` +
    userColorInput.value +
    `<div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>` +
    `<ul class="list-group list-group-flush">
    <li class="list-group-item" id="nameText">An item</li>` +
    userNameText.value +
    `<li class="list-group-item" id="ageNumber ">A second item</li>` +
    userAgeNumber.value +
    `<li class="list-group-item" id=" CountryInput">A third item</li>` +
    userCountryInput.value +
    `<li class="list-group-item" id="female ">A third item</li>` +
    userFemale.value +
    `
  </ul>
 
</div>`;
}
function submitInputs() {
  display();
}
clearInputs();
function clearInputs() {
  nameText.value = "";
  ageNumber.value = "";

  countryInput.value = "";
  female.checked = undefined;
  male.checked = undefined;
}
function showError(error) {
  alertContainer.innerHTML = `<diva class=" alert alert">${error}</div>`;
}
function submitInputs() {
  const userInformation = getUserInformationFromInputs();
  const error = validateUser(userInformation);
  if (error.length > 0) {
    showError(error);
    return;
  }

  userInputs.innerHTML += renderCard(userInformation);
  clearInputs();
}
