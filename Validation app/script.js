var nameError = document.getElementById("name_error");
var numberError = document.getElementById("number_error");
var emailError = document.getElementById("email_error");
var messageError = document.getElementById("message_error")
var submitError = document.getElementById("submit_error");

function validateName(){
    var name = document.getElementById("content_name").value;

    if(name.length==0)
    {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateNumber(){
    var number = document.getElementById("content_number").value;
    if(number.length==0)
    {
        numberError.innerHTML = "Number is required";
    }
    if(number.length<10)
    {
        numberError.innerHTML = "Number have 10 digits";
        return false;
    }
    if(number.length==10){
        numberError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function validateEmail(){
    var email = document.getElementById("content_email").value;
    if(email.length == 0){
        emailError = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage(){
    var message = document.getElementById("content_message").value;
    var required = 30;
    var left = required-message.length;

    if(left>0)
    {
        messageError.innerHTML = left+" more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function valForm(){
    if(!validateName() ||!validateNumber() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
}