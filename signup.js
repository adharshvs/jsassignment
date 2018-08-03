function signup() {
    var users = JSON.parse(localStorage.getItem("users"));    
    var email = document.getElementById('email').value;    
    var pass = document.getElementById('pass').value;    
    
    users = Object.assign(users, {[email]: pass});
    
    console.log(users);
    
    localStorage.setItem("users", JSON.stringify(users));
    //alert(JSON.parse(localStorage.getItem("users")));
    //alert(localStorage.getItem("pass"));
    document.getElementById("signup").reset();
    alert("Account created successfully!");
    //alert(nm.value + "," + uname.value + "," + pass.value);  
}