// Initialize the current image index to 0
let currentImage = 0;

// Get all the carousel image elements
const carouselImages = document.querySelectorAll(".carousel-image");

// Get the left and right arrow elements
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");

// Function to show a specific image by index
function showImage(index) {
    // Fade out the current image
    gsap.to(carouselImages[currentImage], { opacity: 0, duration: 1.5 });
    
    // Fade in the image at the given index
    gsap.to(carouselImages[index], { opacity: 1, duration: 1.5 });
    
    // Update the current image index
    currentImage = index;
}

// Function to display the next image
function nextImage() {
    // Calculate the index of the next image, wrapping around to the first image if necessary
    const nextIndex = (currentImage + 1) % carouselImages.length;
    
    // Show the next image
    showImage(nextIndex);
}

// Function to display the previous image
function previousImage() {
    // Calculate the index of the previous image, wrapping around to the last image if necessary
    const prevIndex = (currentImage - 1 + carouselImages.length) % carouselImages.length;
    
    // Show the previous image
    showImage(prevIndex);
}

// Add a click event listener to the left arrow to show the previous image
leftArrow.addEventListener("click", previousImage);

// Add a click event listener to the right arrow to show the next image
rightArrow.addEventListener("click", nextImage);

// Start the auto-looping carousel with a specified interval
const autoLoopInterval = 3000; // 3000 milliseconds (3 seconds)
setInterval(nextImage, autoLoopInterval);
