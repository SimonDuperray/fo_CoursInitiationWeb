// SELECTIONNER ELEMENTS
var mailInput = document.querySelector("#mail");
var majInput = document.querySelector("#maj");

// DECLARATION VARIABLES
var email;
var isChecked;
var index=localStorage.getItem("currentIndex");

// DECLARATION FONCTIONS
submit = () => {
    if(mailInput.checkValidity()){
        email = mailInput.value;
        isChecked = majInput.checked;
        console.log("Mail: "+email+"\nMaJ: "+isChecked);
    } else {
        alert("Invalid email !");
    }
    /*
        3rd COURSE
    */
    // EMPTY FORM
    mailInput.value="";
    majInput.checked=false;
    // =====
    // STORE DATA IN LOCALSTORAGE
    var obj = { mail: email, isChecked: isChecked };
    localStorage.setItem("currentIndex", index);
    localStorage.setItem(index, JSON.stringify(obj));
    index++;
    // =====
    // CHECK DUPLICATE ENTRY
    // https://developer.mozilla.org/fr/docs/Web/API/Storage/getItem
}