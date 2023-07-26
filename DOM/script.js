var inputuser = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
  return inputuser.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(inputuser.value));
  ul.appendChild(li);
  inputuser.value = "";
}

function addListetAfertClick() {
  if (inputLength() === 0) return;
  createListElement();
}

function addListenerKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListetAfertClick);
inputuser.addEventListener("keypress", addListenerKeyPress);
