// // SELECTIONNER ELEMENT
// var title = document.getElementById("title");

// // DECLARATION FONCTIONS
// changeColor = () => {
//     title.classList.add("red");
//     title.classList.add("underline");
// }
// resetUnderline = () => {
//     title.classList.remove("underline");
// }
// resetRed = () => {
//     title.classList.remove("red");
// }
// toggleGreen = () => {
//     title.classList.toggle("green");
// }
// // CAMELCASE    
// setBGC = () => {
//     title.style.backgroundColor="red";
//     title.style.color="white";
// }




var title = document.getElementById("title");


toggleGreen = () => {
    title.classList.toggle("green");
}

changeColor = () => {
    title.classList.add("red");
    title.classList.add("underline");
}
resetUnderline = () => {
    title.classList.remove("underline");
}
resetRed = () => {
    title.classList.remove("red");
}
setBGC = () => {
    title.style.backgroundColor="red";
    title.style.color="white";
    title.style.margin="20px";
}