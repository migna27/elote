// evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    
    // --- CÓDIGO DEL BOTÓN (de la parte superior de tu archivo) ---
    var btnOK = document.getElementById("btn-OK");
    // declaracion del evento click del boton
    if (btnOK) { // Comprobamos si el botón existe en esta página
        btnOK.addEventListener("click", function() {
            //delcaramos una variable que representa el input en HTML
            var name = document.getElementById("input-name")
            //mostramos una alerta con el nombre escrito en el input
            alert("Hola " + name.value + ", bienvenido a mi sitio WEB");
            console.log("Se imprimio la alerta");
            console.error("Esto es un error simulado");
            console.warn("Esto es una advertencia simulada");
        });
    }

    // --- CÓDIGO DE LA LLUVIA (de la parte inferior de tu archivo) ---
    const container = document.querySelector(".figure-rain-container");

    function createFigure() {
        if (!container) return; // No hacer nada si el contenedor no existe

        const figure = document.createElement("div");
        figure.classList.add("figure-item");

        // Decidir aleatoriamente si es un círculo o un cuadrado
        if (Math.random() > 0.5) {
            figure.classList.add("square");
        }

        // 1. Posición horizontal aleatoria
        figure.style.left = Math.random() * 100 + "vw";
        
        // 2. Duración de caída aleatoria (entre 4 y 8 segundos)
        const duration = Math.random() * 4 + 4;
        figure.style.animationDuration = duration + "s";
        
        // 3. Retraso aleatorio (para que no empiecen todas juntas)
        figure.style.animationDelay = Math.random() * 3 + "s";

        container.appendChild(figure);

        // 4. Borrar la figura cuando termine su animación
        setTimeout(() => {
            figure.remove();
        }, (duration + 3) * 1000); // (duración + retraso max) * 1000
    }

    // Crear 40 figuras para empezar
    for(let i = 0; i < 40; i++) {
        createFigure();
    }
    
    // Crear una nueva figura cada 300ms
    setInterval(createFigure, 300);
});

// --- CÓDIGO DEL MOUSEMOVE (se queda afuera) ---
// Escucha el evento 'mousemove' en todo el documento
document.addEventListener('mousemove', function(e) {
    // Actualiza las variables CSS con la posición del cursor
    // e.clientX = posición X
    // e.clientY = posición Y
    document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
});