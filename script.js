
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Cicla para o próximo
    showSlide(currentIndex);
}

// Mostra o primeiro slide
showSlide(currentIndex);
// Troca o slide a cada 5 segundos
setInterval(nextSlide, 5000);