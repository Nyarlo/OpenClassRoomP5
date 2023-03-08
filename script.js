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

// Récupération des éléments HTML
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#tagline');
const dots = document.querySelector('.dots');

// Définition des images et des taglines du diaporama
const images = slides.map(slide => `./assets/images/slideshow/${slide.image}`);
const tagLines = slides.map(slide => slide.tagLine);

// Définition de l'index courant de l'image
let currentImageIndex = 0;

// Fonction pour afficher l'image courante et sa tagline associée
function displayCurrentImage() {
  bannerImg.src = images[currentImageIndex];
  if(tagLine){
  tagLine.innerHTML = tagLines[currentImageIndex];
  }
}

// Fonction pour mettre à jour les indicateurs de diapositives
function updateDots() {
  // Supprimer tous les indicateurs de diapositives existants
  while (dots.firstChild) {
    dots.removeChild(dots.firstChild);
  }

  // Ajouter un indicateur de diapositive pour chaque image
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentImageIndex) {
      dot.classList.add('dot_selected');
    }
    dots.appendChild(dot);
  }
}

// Afficher l'image courante et mettre à jour les indicateurs de diapositives
displayCurrentImage();
updateDots();

// Ajouter des gestionnaires d'événements pour les clics sur les flèches
arrowLeft.addEventListener('click', function () {
  // Passer à l'image précédente dans la liste
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  // Afficher l'image courante et sa tagline associée, et mettre à jour les indicateurs de diapositives
  displayCurrentImage();
  updateDots();
});

arrowRight.addEventListener('click', function () {
  // Passer à l'image suivante dans la liste
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  // Afficher l'image courante et sa tagline associée, et mettre à jour les indicateurs de diapositives
  displayCurrentImage();
  updateDots();
});
