// evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    
    // --- CÓDIGO DEL BOTÓN ---
    var btnOK = document.getElementById("btn-OK");
    if (btnOK) { 
        btnOK.addEventListener("click", function() {
            var name = document.getElementById("input-name")
            alert("Hola " + name.value + ", bienvenido a mi sitio WEB");
            console.log("Se imprimio la alerta");
            console.error("Esto es un error simulado");
            console.warn("Esto es una advertencia simulada");
        });
    }

    // --- INICIO: CÓDIGO DE LLUVIA "NOVA" INTERACTIVA ---
    const container = document.querySelector(".figure-rain-container");
    const chars = "01"; 
    
    let particles = [];
    
    let mouse = { 
        x: null, 
        y: null, 
        radius: 100, // Radio de "quemado" y repulsión azul
        attractionRadius: 200, // Radio de atracción roja
        novaRadius: 200 // Radio de la explosión de la nova
    };

    // 1. SEGUIMIENTO DEL RATÓN
    document.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
        document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
    });

    window.addEventListener('mouseout', function() {
        mouse.x = null;
        mouse.y = null;
    });

    // 2. CREACIÓN DE PARTÍCULAS (Modificada para "Rojas" y "Azules")
    function createFigure() {
        if (!container) return; 

        const figure = document.createElement("div");
        figure.classList.add("figure-item");
        
        figure.textContent = chars[Math.floor(Math.random() * chars.length)];
        
        let particle = {
            element: figure,
            x: Math.random() * window.innerWidth, 
            y: -20,                             
            vy: Math.random() * 2 + 1, // Velocidad más lenta (1 a 3)
            vx: 0,
            type: 'blue', // Tipo por defecto
            isExploding: false,
            toBeRemoved: false
        };

        // Probabilidad de ser una partícula roja (aprox 1 en 50)
        if (Math.random() < 0.15) {
            particle.type = 'red';
            figure.classList.add('red-particle');
        }
        
        figure.style.left = particle.x + 'px';
        figure.style.top = particle.y + 'px'; 

        container.appendChild(figure);
        particles.push(particle);
    }
    
    // 3. BUCLE DE ANIMACIÓN (Modificado para Físicas Múltiples)
    function animateRain() {
        for (let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];

            // 1. Limpiar partículas que ya explotaron
            if (p.toBeRemoved) {
                p.element.remove();
                particles.splice(i, 1);
                continue;
            }

            // 2. Si está explotando, no hacer nada más (solo dejar que termine animación)
            if (p.isExploding) {
                continue;
            }

            let dx = 0;
            let dy = 0;
            let distance = 0;

            if (mouse.x !== null) {
                dx = p.x - mouse.x;
                dy = p.y - mouse.y;
                distance = Math.sqrt(dx * dx + dy * dy);
            }

            // 3. Físicas según el tipo de partícula
            if (p.type === 'red') {
                // FÍSICA DE PARTÍCULA ROJA (ATRACCIÓN Y NOVA)
                if (mouse.x !== null) {
                    // Colisión / Detonación de Nova
                    if (distance < 10) { 
                        p.isExploding = true;
                        p.element.classList.add('nova');

                        // Aplicar fuerza de explosión a todas las partículas cercanas
                        for (let j = 0; j < particles.length; j++) {
                            if (i === j) continue; // No explotarse a sí misma
                            let p2 = particles[j];
                            
                            let dx_nova = p2.x - p.x;
                            let dy_nova = p2.y - p.y;
                            let dist_nova = Math.sqrt(dx_nova * dx_nova + dy_nova * dy_nova);

                            if (dist_nova < mouse.novaRadius) {
                                let force = (mouse.novaRadius - dist_nova) / mouse.novaRadius;
                                let forceX = (dx_nova / dist_nova) * force * 15; // Fuerza de explosión
                                let forceY = (dy_nova / dist_nova) * force * 15;
                                p2.vx += forceX;
                                p2.vy += forceY;
                            }
                        }
                        
                        // Marcar para eliminar después de la animación (500ms)
                        setTimeout(() => { p.toBeRemoved = true; }, 500);

                    } else if (distance < mouse.attractionRadius) {
                        // Atracción
                        let force = (mouse.attractionRadius - distance) / mouse.attractionRadius;
                        // Invertimos la dirección de la fuerza (atracción)
                        p.vx -= (dx / distance) * force * 2; 
                        p.vy -= (dy / distance) * force * 2;
                    }
                }

            } else {
                // FÍSICA DE PARTÍCULA AZUL (REPELSIÓN Y QUEMADO)
                if (mouse.x !== null && distance < mouse.radius) {
                    p.element.classList.add('burning');
                    // Repulsión
                    let force = (mouse.radius - distance) / mouse.radius;
                    p.vx += (dx / distance) * force * 3; 
                } else {
                    p.element.classList.remove('burning');
                }
            }


            // 4. Aplicar físicas generales (fricción y gravedad)
            p.vx *= 0.95; // Fricción
            
            // Aplicar velocidad (gravedad y fuerzas)
            p.y += p.vy; 
            p.x += p.vx; 
            
            p.element.style.top = p.y + 'px';
            p.element.style.left = p.x + 'px';

            // 5. Eliminar si está fuera de la pantalla
            if (p.y > window.innerHeight + 50) {
                p.element.remove();
                particles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animateRain);
    }

    // 4. INICIAR LA LLUVIA (Más densa)
    for(let i = 0; i < 80; i++) {
        createFigure(); 
    }
    
    setInterval(createFigure, 100); // Tasa de aparición aumentada
    
    animateRain();
    
    // --- FIN: CÓDIGO DE LLUVIA "NOVA" INTERACTIVA ---

    // --- INICIO: CÓDIGO DE TRANSICIÓN DE PÁGINA "GLITCH" ---
    
    // 1. Seleccionar todos los enlaces del header
    const navLinks = document.querySelectorAll('header a');
    // 2. Duración de la animación (600ms). Debe coincidir con el CSS.
    const animationDuration = 600; 

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const newUrl = this.href; // La URL a la que queremos ir

            // 3. Solo interceptar enlaces internos (que no empiecen con 'http' o '#')
            // y que no sean un enlace a la página actual.
            if (newUrl.startsWith(window.location.origin) && newUrl !== window.location.href) {
                
                // 4. Prevenir el cambio de página inmediato
                event.preventDefault(); 
                
                // 5. Aplicar la clase de "salida" al body
                document.body.classList.add('page-exiting');

                // 6. Esperar a que termine la animación
                setTimeout(() => {
                    // 7. Cambiar de página
                    window.location.href = newUrl;
                }, animationDuration);
            }
        });
    });
    // --- FIN: CÓDIGO DE TRANSICIÓN DE PÁGINA "GLITCH" ---


function applyHackerEffect(element, revealSpeed, scrambleSpeed) {
    // Caracteres para el "scramble". Añadimos muchos guiones bajos
    // para que parezca que está "pensando" lentamente.
    const chars = "!<>-_\\/[]{}—=+*^?#_";
    const originalText = element.textContent;
    let iteration = 0;
    let scrambleInterval;

    // Guarda el texto original para no perderlo
    element.dataset.originalText = originalText;

    // 1. Intervalo de REVELACIÓN
    // Controla qué tan rápido se "resuelve" la siguiente letra.
    const revealInterval = setInterval(() => {
        // Detener el bucle principal cuando se revela todo
        if (iteration >= originalText.length) {
            clearInterval(revealInterval);
            clearInterval(scrambleInterval); // Detener el "scramble"
            element.textContent = originalText; // Asegurar que el texto final sea correcto
            return;
        }
        
        // Avanzar a la siguiente letra
        iteration += 1; 

    }, revealSpeed); // <-- ¡AQUÍ ESTÁ LA VELOCIDAD DE REVELADO!

    // 2. Intervalo de "SCRAMBLE"
    // Controla qué tan rápido cambian los caracteres "basura".
    scrambleInterval = setInterval(() => {
        element.textContent = originalText
            .split("")
            .map((letter, index) => {
                // Si el índice es menor que la iteración actual, ya se reveló.
                if (index < iteration) {
                    return originalText[index];
                }
                
                // Si la letra original es un espacio, mantenerlo
                if (originalText[index] === " ") {
                    return " ";
                }

                // De lo contrario, mostrar un caracter aleatorio
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
        
        // Si el texto ya se reveló por completo, el otro intervalo lo detendrá.
        if(iteration >= originalText.length) {
             clearInterval(scrambleInterval);
             element.textContent = originalText;
        }

    }, scrambleSpeed); // <-- ¡AQUÍ ESTÁ LA VELOCIDAD DEL "SCRAMBLE"!
}


// --- Ahora, buscamos el elemento y activamos el efecto ---
const hackerElements = document.querySelectorAll('.hacker-effect');

// Aplicamos el efecto a CADA uno de ellos
hackerElements.forEach(element => {
    // Hacemos que la velocidad sea personalizable desde el HTML
    // Si no se especifica, usa los valores lentos (300 y 100)
    const revealSpeed = parseInt(element.dataset.revealSpeed || "300");
    const scrambleSpeed = parseInt(element.dataset.scrambleSpeed || "100");

    applyHackerEffect(element, revealSpeed, scrambleSpeed);
});
// --- INICIO: INTERACCIÓN AVANZADA DE FORMULARIOS ---

// 1. Seleccionar todos los inputs de formulario que tenemos
const allInputs = document.querySelectorAll(
    '.input-welcome, .input-value1, .input-value2, .input-value3'
);
// Duración de la animación en CSS (500ms)
const labelAnimationDuration = 500;

allInputs.forEach(input => {
    // 2. Añadir listener para cuando el usuario HACE CLIC en el input
    input.addEventListener('focus', () => {
        // 3. Encontrar el <p> que está justo antes (su etiqueta)
        const label = input.previousElementSibling;

        // 4. Comprobar que existe y es un <p>
        if (label && label.tagName === 'P') {
            // 5. Aplicar la clase de animación
            label.classList.add('label-active');

            // 6. Quitar la clase después de que termine la animación
            // para que pueda volver a ejecutarse la próxima vez
            setTimeout(() => {
                if (label) { 
                    label.classList.remove('label-active');
                }
            }, labelAnimationDuration);
        }
    });
});

// --- FIN: INTERACCIÓN AVANZADA DE FORMULARIOS ---
});