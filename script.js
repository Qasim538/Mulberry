let currentImage = 0;
const carouselImages = document.querySelectorAll(".carousel-image");
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");

function showImage(index) {
    gsap.to(carouselImages[currentImage], { opacity: 0, duration: 1.5 });
    gsap.to(carouselImages[index], { opacity: 1, duration: 1.5 });
    currentImage = index;
}

function nextImage() {
    const nextIndex = (currentImage + 1) % carouselImages.length;
    showImage(nextIndex);
}

function previousImage() {
    const prevIndex = (currentImage - 1 + carouselImages.length) % carouselImages.length;
    showImage(prevIndex);
}

leftArrow.addEventListener("click", previousImage);
rightArrow.addEventListener("click", nextImage);

// Start the auto-looping carousel
const autoLoopInterval = 3000;
setInterval(nextImage, autoLoopInterval);
