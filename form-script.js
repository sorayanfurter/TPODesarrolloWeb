function validation(){
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

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

    if(mensaje.length <= 100){
        text= "Por favor, introduzca un mensaje completo";
        error_message.innerHTML = text;
        return false;
    }
    alert("Mensaje enviado con éxito!")  
    return true;

}