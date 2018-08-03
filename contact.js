function contact() {    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var query = document.getElementById('question').value;
    
    var json = {
        name: name,
        email: email,
        phone: phone,
        question: query 
    };

    var data = json;
    
    var xhr = new XMLHttpRequest();
    var url = "http://demo6835492.mockable.io/sendEmail";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    };
    
    xhr.send(data);
    //document.getElementById("contact").submit();      
}