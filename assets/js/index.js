document.addEventListener("DOMContentLoaded", function () {
    // carousel  code
    const carouselPlaceholder = document.getElementById("carousel-placeholder");
    const carouselRequest = new XMLHttpRequest();
    carouselRequest.open("GET", "/component/carousel.html", true);
    carouselRequest.onload = function () {
        if (carouselRequest.status >= 200 && carouselRequest.status < 400) {
            carouselPlaceholder.innerHTML = carouselRequest.responseText;
  
            // carousel code
            function modulo(number, mod) {
                let result = number % mod;
                if (result < 0) {
                    result += mod;
                }
                return result;
            }
  
            function setUpCarousel(carousel) {
                let currentSlide = 0;
                const slidesContainer = carousel.querySelector("[data-carousel-slides-container]");
                const numSlides = slidesContainer.children.length;

                function changeSlide(slideNumber) {
                    carousel.style.setProperty("--current-slide", slideNumber);
                }

                function handleNext() {
                    currentSlide = modulo(currentSlide + 1, numSlides);
                    changeSlide(currentSlide);
                }

                function handlePrevious() {
                    currentSlide = modulo(currentSlide - 1, numSlides);
                    changeSlide(currentSlide);
                }
                const nextButton = carousel.querySelector("[data-carousel-button-next]");
                const previousButton = carousel.querySelector("[data-carousel-button-previous]");

                nextButton.addEventListener('click', handleNext);
                previousButton.addEventListener('click', handlePrevious);
                changeSlide(currentSlide);
            }
  
            const carousels = document.querySelectorAll("[data-carousel]");
            carousels.forEach(setUpCarousel);
        } else {
            console.error("Failed to load carousel");
        }
    };
    carouselRequest.send();
});