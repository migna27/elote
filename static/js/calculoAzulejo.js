document.addEventListener("DOMContentLoaded", function() {
    // declaracion de variables en javaScript que representa el boton en HTML
    var btnOK = document.getElementById("btn-OK");
    // declaracion del evento click del boton
    btnOK.addEventListener("click", function() {
        //delcaramos una variable que representa el input en HTML
        var value1 = parseFloat(document.getElementById("input-value1").value);
      
       // var value1number = parseFloat(value1);

        var value2 = parseFloat(document.getElementById("input-value2").value);
        
        var value3 = parseFloat(document.getElementById("input-value3").value);
        // isNaN = is Not a Number
        // isNaN = no es un numero
        // isNaN = sirve para validar si el valor es un numero o no
        // si el valor es un numero devuelve false
        // si el valor no es un numero devuelve true
        if (isNaN(value1) || isNaN(value2) || isNaN(value3) ){
            alert("Por favor ingrese numeros validos en todos los campos.");
            //console son mensajes para el desarrollador
            console.error("Error: Uno o mas valores no son numeros validos.");
            return;
        }
        var  largo = value1 *100
        var  ancho = value2 *100
        var area = largo * ancho
        var areaAzulejo = 25 * 25
        var cantidadAzulejos = area / areaAzulejo
        var precioAzulejo = parseFloat(document.getElementById("input-value3").value);
        var total = cantidadAzulejos * precioAzulejo
       
       
        
        alert("El area a cubrir es de " + area + " cm2 \n se necesitan " + cantidadAzulejos + " azulejos \n el costo total es de: $" + total + "\n area en m2: " + (area/10000) );
        
    });

    
});