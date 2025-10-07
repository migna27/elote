//evento que se ejecita cuando se ternima de cargar el DOM
//DOM = Document Object Model
document.addEventListener("DOMContentLoaded", function() {
    // declaracion de variables en javaScript que representa el boton en HTML
    var btnOK = document.getElementById("btn-OK");
    // declaracion del evento click del boton
    btnOK.addEventListener("click", function() {
        //delcaramos una variable que representa el input en HTML
        var value1 = parseFloat(document.getElementById("input-value1").value);
      
       // var value1number = parseFloat(value1);

        var value2 = parseFloat(document.getElementById("input-value2").value);
        
        // isNaN = is Not a Number
        // isNaN = no es un numero
        // isNaN = sirve para validar si el valor es un numero o no
        // si el valor es un numero devuelve false
        // si el valor no es un numero devuelve true
        if (isNaN(value1) || isNaN(value2)) {
            alert("Por favor ingrese numeros validos en ambos campos.");
            //console son mensajes para el desarrollador
            console.error("Error: Uno o ambos valores no son numeros validos.");
            return;
        }

        var sum = value1 + value2;
        
        alert("La suma de " + value1 + " y " + value2 + " es: " + sum);
        console.log("Se imprimio la alerta");
        console.error("Esto es un error simulado");
        console.warn("Esto es una advertencia simulada");
    });

    var btnOK = document.getElementById("btn-restar");
    // declaracion del evento click del boton
    btnOK.addEventListener("click", function() {
        //delcaramos una variable que representa el input en HTML
        var value1 = parseFloat(document.getElementById("input-value1").value);
      
       // var value1number = parseFloat(value1);

        var value2 = parseFloat(document.getElementById("input-value2").value);
        
  
        if (isNaN(value1) || isNaN(value2)) {
            alert("Por favor ingrese numeros validos en ambos campos.");
            //console son mensajes para el desarrollador
            console.error("Error: Uno o ambos valores no son numeros validos.");
            return;
        }

        var resta = value1 - value2;
        

        alert("La resta de " + value1 + " y " + value2 + " es: " + resta);
    });

    var btnOK = document.getElementById("btn-multiplicar");
    // declaracion del evento click del boton
    btnOK.addEventListener("click", function() {
        //delcaramos una variable que representa el input en HTML
        var value1 = parseFloat(document.getElementById("input-value1").value);
      
       // var value1number = parseFloat(value1);

        var value2 = parseFloat(document.getElementById("input-value2").value);
        
  
        if (isNaN(value1) || isNaN(value2)) {
            alert("Por favor ingrese numeros validos en ambos campos.");
            //console son mensajes para el desarrollador
            console.error("Error: Uno o ambos valores no son numeros validos.");
            return;
        }

        var multiplicacion = value1 * value2;
        

        alert("La multiplicacion de " + value1 + " y " + value2 + " es: " + multiplicacion);
    });

    var btnOK = document.getElementById("btn-dividir");
    // declaracion del evento click del boton
    btnOK.addEventListener("click", function() {
        //delcaramos una variable que representa el input en HTML
        var value1 = parseFloat(document.getElementById("input-value1").value);
      
       // var value1number = parseFloat(value1);

        var value2 = parseFloat(document.getElementById("input-value2").value);
        
  
        if (isNaN(value1) || isNaN(value2)) {
            alert("Por favor ingrese numeros validos en ambos campos.");
            //console son mensajes para el desarrollador
            console.error("Error: Uno o ambos valores no son numeros validos.");
            return;
        }

        var division = value1 / value2;
        

        alert("La division de " + value1 + " y " + value2 + " es: " + division);
    });
});