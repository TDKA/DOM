"use strict";

let aTag = document.getElementById("inner");
let span = document.querySelector("span");

aTag.addEventListener("click", runEvent);

function runEvent(e) {
  let newSpan = span.cloneNode(true);
  span.appendChild(newSpan);
  e.preventDefault();
}

//
function runEvent() {
  console.log("Le lien a été cliqué");
}

//

let emailInput = document.getElementById("email");
let formResult = document.getElementById("form-result");

emailInput.addEventListener("keydown", runEvent2);

function runEvent2(e) {
  formResult.innerText = e.target.value;
}

//
let element = document.getElementsByTagName("button")[0];
console.log(element);
element.setAttribute("type", "submit");

element.addEventListener("click", runEvent3);

function runEvent3(e) {
  alert(emailInput.value);
}
