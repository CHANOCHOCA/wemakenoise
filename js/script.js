let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll) {
        document.querySelector("header").style.top = "-100%";
    } else {
        document.querySelector("header").style.top = "0";
    }
    lastScroll = currentScroll;
});

// JavaScript file

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
            // Change class to 'contenido visible flexbox1 espacio5'
            contenidos[index].className = 'contenido visible flexbox1 espacio5';
        });
    });

    // Show the first .contenido by default
    if (contenidos.length > 0) {
        contenidos[0].className = 'contenido visible flexbox1 espacio5';
    }
};