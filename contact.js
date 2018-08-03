
var object = {};

function contact(form) {
    
    var name = form.name.value;
    var email = form.email.value;
    var phone = form.phone.value;
    var query = form.question.value;
    
    var json = {
        name: name,
        email: email,
        phone: phone,
        question: query 
    };
    
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
    var data = json;
    xhr.send(data);
}