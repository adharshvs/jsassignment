function login() {
    var userEmail = document.getElementById('email').value;
    var userPass = document.getElementById('pass').value;
    if(!localStorage.hasOwnProperty(userEmail)) {
        alert("No such account exists");
    } else if(localStorage.getItem(userEmail) == userPass) {
        alert("Welcome, " + userEmail);
    } else {
        alert("Password is wrong.");
    }     
}