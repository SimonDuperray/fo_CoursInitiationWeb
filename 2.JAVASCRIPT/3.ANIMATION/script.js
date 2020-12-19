// SELECTIONNER ELEMENT
var redSquare = document.querySelector("#redSquare");
var blueCircle = document.querySelector("#blueCircle");
var myList = document.querySelector("#mylist");
// var squareContainer = document.querySelector("#squareContainer");

// DECLARATION VARIABLES
var compteur=2;

// DECLARATION FONCTIONS
redSquare.addEventListener("mouseenter", () => {
    blueCircle.classList.add("border");
});
redSquare.addEventListener("mouseleave", () => {
    blueCircle.classList.remove("border");
});
// blueCircle.addEventListener("click", () => {
//     let newLi = document.createElement("li");
//     newLi.innerHTML = "1";
//     myList.appendChild(newLi);
// });
// blueCircle.addEventListener("click", () => {
//     let newLi = document.createElement("li");
//     newLi.innerHTML = compteur;
//     compteur++;
//     myList.appendChild(newLi);
// });

// EXERCICE: CREER DES CARRES VERTS EN CLIQUANT SUR LE CERCLE BLEU
blueCircle.addEventListener("click", () => {
    let newSquare = document.createElement("div");
    newSquare.classList.add("greenSquare");
    squareContainer.appendChild(newSquare);
});