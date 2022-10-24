/* function validation(){
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var error_message = document.getElementById("error_message");
   

    error_message.style.padding = "5px";

    if(nombre.length <5){
        text= "Por favor, introduzca su nombre completo";
        error_message.innerHTML = text;
        return false;
    }

    if(asunto.length <8){
        text= "Por favor, introduzca un asunto";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length<6){
        text= "Por favor, introduzca un E-mail válido";
        error_message.innerHTML = text;
        return false;
    }

    if(mensaje.length <= 20){
        text= "Por favor, introduzca mas de 20 caracteres";
        error_message.innerHTML = text;
        return false;
    }
    return true

    } */

function validation() {
  let nombre = document.querySelector("#nombre");
  let asunto = document.querySelector("#asunto");
  let email = document.querySelector("#email");
  let mensaje = document.querySelector("#mensaje");
  let error_message = document.querySelector("#error_message");

  if (nombre.value.length < 5) {
    text = "Por favor, introduzca su nombre completo";
    error_message.innerHTML = text;
    return false;
  }
  if (asunto.value.length < 8) {
    text = "Por favor, introduzca un asunto";
    error_message.innerHTML = text;
    return false;
  }
  if ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email.value)) {
    text = "Por favor, introduzca un E-mail válido";
    error_message.innerHTML = text;
    return false;
  }
  if (mensaje.value.length <= 20) {
    text = "Por favor, introduzca mas de 20 caracteres";
    error_message.innerHTML = text;
    return false;
  } else {
    error_message.innerHTML = "";
    return true;
  }
}

var $form = document.querySelector("#form");
$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  if (validation() === true) {
    var status = document.getElementById("my-form-status");
    const form = new FormData(this);
    const data = await fetch("https://formspree.io/f/xoqbnrqy", {
      method: this.method,
      body: form,
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        
        status.innerHTML = "Gracias por contactarnos :)!";
        this.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! Hubo un problema al enviar su mensaje :("
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! Hubo un problema al enviar su mensaje :("
    });
  }
}

