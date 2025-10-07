//evento que se ejecita cuando se ternima de cargar el DOM
//DOM = Document Object Model
document.addEventListener("DOMContentLoaded", function() {
    // declaracion de variables en javaScript que representa el boton en HTML
    var btnOK = document.getElementById("btn-OK");
    // declaracion del evento click del boton
    btnOK.addEventListener("click", function() {
        //delcaramos una variable que representa el input en HTML
        var name = document.getElementById("input-name")
        //mostramos una alerta con el nombre escrito en el input
        alert("Hola " + name.value + ", bienvenido a mi sitio WEB");
        console.log("Se imprimio la alerta");
        console.error("Esto es un error simulado");
        console.warn("Esto es una advertencia simulada");
    });
});