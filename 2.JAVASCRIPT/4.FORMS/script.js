// SELECTIONNER ELEMENTS
var mailInput = document.querySelector("#mail");
var majInput = document.querySelector("#maj");

// DECLARATION VARIABLES
var email;
var isChecked;

// DECLARATION FONCTIONS
submit = () => {
    if(mailInput.checkValidity()){
        email = mailInput.value;
        isChecked = majInput.checked;
        console.log("Mail: "+email+"\nMaJ: "+isChecked);
    } else {
        alert("Invalid email !");
    }
}