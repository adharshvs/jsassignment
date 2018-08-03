var flag = 0;

function login() {
    var userEmail = document.getElementById('email');
    var userPass = document.getElementById('pass');
    
    users = JSON.parse(localStorage.getItem("users"));    
    //alert(JSON.stringify(users));
    for(var user in users) {
        if(users.hasOwnProperty(user)) {
            var pass = users[user];
            if(userEmail.value == user && userPass.value == pass) {                
                alert("Welcome, " + userEmail.value + ".");
                document.getElementById("login").reset();
                flag = 1;                
            }        
        } 
    }
    if(flag === 0) {
        alert("Credentials do not match.");
    }    
}