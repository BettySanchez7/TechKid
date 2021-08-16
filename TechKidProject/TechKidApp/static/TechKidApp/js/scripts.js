
(function($) {
  const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

$(".img1").click(function () {  
  document.getElementById('img1').src = "/static/TechKidApp/assets/img/minecraft.jpg";
  document.getElementById('img1').id = "img2";
});

})(jQuery);


/*function validation(){
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

} */