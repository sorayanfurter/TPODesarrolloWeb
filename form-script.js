
function validation() {
  let nombre = document.querySelector("#nombre");
  let asunto = document.querySelector("#asunto");
  let email = document.querySelector("#email");
  let mensaje = document.querySelector("#mensaje");
  let error_message = document.querySelector("#error_message");

  if (nombre.value.length < 5) {
    text = "Please enter your full name";
    error_message.innerHTML = text;
    return false;
  }
  if (asunto.value.length <= 2) {
    text = "Please enter a longer subject";
    error_message.innerHTML = text;
    return false;
  }
  if ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email.value)) {
    text = "Please enter a valid email address.";
    error_message.innerHTML = text;
    return false;
  }
  if (mensaje.value.length <= 20) {
    text = "Please enter more than 20 letters";
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
        
        status.innerHTML = "Thank you for contacting us; we will respond as soon as possible!";
        this.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "There was an error trying to send your message. Please try again later"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "There was an error trying to send your message. Please try again later"
    });
  }
}

