function signup() {     
    var email = document.getElementById('email').value;    
    var pass = document.getElementById('pass').value;    
    localStorage.setItem(email, pass);
    
    document.getElementById("signup").reset();
    alert("Account created successfully!");    
}