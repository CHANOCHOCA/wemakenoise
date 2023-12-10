let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const header = document.querySelector("header");
    const navMenu = document.querySelector(".menu-desplegable");

    if (currentScroll > lastScroll) {
        header.style.top = "-100%";

        // Verificar si la clase "visible1" está activada en el menú desplegable
        if (navMenu.classList.contains("visible1")) {
            // Si la clase está activada, establecer top en "0"
            header.style.top = "0";
        }
    } else {
        header.style.top = "0";
    }
    lastScroll = currentScroll;
});

document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".iconos-responsive");
    const navMenu = document.querySelector(".menu-desplegable");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("visible1");
    });
});

window.onload = function() {
    var titulos = document.querySelectorAll('.titulo');
    var contenidos = document.querySelectorAll('.contenido');

    titulos.forEach(function(titulo, index) {
        titulo.addEventListener('click', function(event) {
            // Prevent the default click behavior
            event.preventDefault();

            contenidos.forEach(function(contenido) {
                // Change class to 'contenido oculto'
                contenido.className = 'contenido oculto';
            });
            contenidos[index].className = 'contenido visible flexbox1 espacio-flex';
        });
    });

    // Show the first .contenido by default
    if (contenidos.length > 0) {
        contenidos[0].className = 'contenido visible flexbox1 espacio-flex';
    }
};

function changeTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const icons = document.querySelectorAll('.flexbox2 .buscar');

    // Remove active class from all testimonials and icons
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    icons.forEach(icon => icon.src = 'assets/index/boton.svg');

    // Add active class to the selected testimonial and change the icon
    testimonials[index - 1].classList.add('active');
    icons[index - 1].src = 'assets/index/boton-relleno.svg';
}