function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message").value;
    var text;

    error_message.style.paading = "10px";

    if(name.lenght < 5){
        text = "Por favor, ingrese un nombre válido";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.lenght < 6){
        text = "Por favor, ingrese un correo válido";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(tel) || tel.lenght != 10){
        text = "Por favor, ingrese un número de teléfono válido";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.lenght < 5){
        text = "Por favor, ingrese un asunto válido";
        error_message.innerHTML = text;
        return false;
    }

    if(message.lenght <= 140){
        text = "Por favor, ingrese más de 140 caracteres";
        error_message.innerHTML = text;
        return false;
    }

    alert("El formulario se envió exitosamente")
    return true;

}