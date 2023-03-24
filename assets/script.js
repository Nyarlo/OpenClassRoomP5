const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

// HTML elements querry 
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#tagline');
const dots = document.querySelector('.dots');

// Define constants
const images = slides.map(slide => `./assets/images/slideshow/${slide.image}`);
const tagLines = slides.map(slide => slide.tagLine);

// Define current image index
let currentImageIndex = 0;

// Display tagline and image function
function displayCurrentImage() {
  bannerImg.src = images[currentImageIndex];
  if(tagLine){
  tagLine.innerHTML = tagLines[currentImageIndex];
  }
}

// Display dots for the current images
function updateDots() {
  // First we delete every dot
  while (dots.firstChild) {
    dots.removeChild(dots.firstChild);
  }

  // Then we add a dot for every everyimage and a full dot for the current image
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentImageIndex) {
      dot.classList.add('dot_selected');
    }
    dots.appendChild(dot);
  }
}

// Call to display
displayCurrentImage();
updateDots();

// Adding even Listeners 
arrowLeft.addEventListener('click', function () {
  // Image change on click
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  // Display current image and update dot
  displayCurrentImage();
  updateDots();
});

arrowRight.addEventListener('click', function () {
  // Image change on click
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  // Display current image and update dot
  displayCurrentImage();
  updateDots();
});
