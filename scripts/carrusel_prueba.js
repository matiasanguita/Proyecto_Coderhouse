document.addEventListener("DOMContentLoaded", function() {
    const carrusel = document.querySelector(".carrusel");
    const imagenes = document.querySelectorAll(".imagen");

    let contador = 0;

    setInterval(() => {
        imagenes[contador].classList.remove("activa");
        contador++;
        if (contador >= imagenes.length) {
            contador = 0;
        }
        imagenes[contador].classList.add("activa");
        carrusel.style.transform = `translateX(-${contador * 100}%)`;
    }, 2000); // Cambia cada 2 segundos, ajusta el valor según tus preferencias
});