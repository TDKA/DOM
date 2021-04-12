"use strict";
//ex - 1 / A

let footer = document.querySelector("footer");
footer.classList.add("footer");
console.log(footer);

// ex - 1 / B
let newP = document.createElement("p");
let textP = document.createTextNode(
  "Ceci est un contenu <strong>très important</strong>"
).innerHTML;
let main = document.querySelector("main");

newP.innerHTML = " Ceci est un contenu <strong>très important</strong>";

main.appendChild(newP);

console.log(newP);

//ex-1 / C

let pTags = document.querySelectorAll("p");

pTags.forEach((tag) => {
  tag.style.color = "red";
  tag.classList.replace("paragraph", "text");
});

console.log(pTags);

// ex-1 / D
let header = document.getElementById("header");
let newUl = document.createElement("ul");

newUl.setAttribute("class", "list");
newUl.setAttribute("id", "important-list");

for (let i = 0; i < 4; i++) {
  let newLi = document.createElement("li");
  newLi.classList.add("list_element");
  newLi.textContent = `Ceci est l'élément n°${i}`;
  newLi.setAttribute("data-nul", i + 1);
  newUl.appendChild(newLi);
}

header.appendChild(newUl);
