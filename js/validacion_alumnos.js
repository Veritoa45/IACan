document.addEventListener("DOMContentLoaded", function() {
var formulario = document.getElementById("alumnos_adiest");
var mensajeError = document.getElementById("mensajeError");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 

    var nombre = event.target.querySelector("#nombre_u").value;
    var apellido = event.target.querySelector("#apellido_u").value;
    var edad = event.target.querySelector("#age_u").value;
    var genero = event.target.querySelector("#genero_u").value;
    var ciudad = event.target.querySelector("#ciudad_u").value;
    var correo = event.target.querySelector("#mail_u").value;
    var telefono = event.target.querySelector("#telefono_u").value;
    var usuario = event.target.querySelector("#usuario_u").value;
  
    var expresion = /^[A-Za-z]{4,16}$/;
    if (nombre === "" || apellido === "" || edad === "" || genero === "" || ciudad === "" || correo === "" || telefono === "") { 
        mostrarError("Debe rellenar todos los campos");
        return;
    }
    if (!expresion.test(nombre)) {
        mostrarError("El nombre dado es incorrecto");
        return;
    }
    if (!expresion.test(apellido)) {
        mostrarError("El apellido dado es incorrecto");
        return;
    }
    if (!expresion.test(ciudad)) {
        mostrarError("La ciudad dada es incorrecta");
        return;
    }

    var mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    if (!mailRegex.test(correo)) {
        mostrarError("El correo es inválido");
        return;
    }
  
    var number  = /^[0-9]{2}$/;
    if(!number.test(edad) || edad < 18) {
        mostrarError("Debe ingresar una edad válida");
        return;
    }
    
    var user = /^[a-z0-9_-]{3,16}$/;
    if(!user.test(usuario)) {
        console.log("Hay un error")
        mostrarError("El usuario dado es incorrecto");
        return;
    }
});

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    mensajeError.classList.add("error");
    document.body.appendChild(mensajeError);
    }
});


