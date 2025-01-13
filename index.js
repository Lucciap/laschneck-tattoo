

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    menu.classList.toggle('open');
    hamburger.classList.toggle('active');
  }
});

menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
    if (window.innerWidth < 768) {
      menu.classList.remove('open');
      hamburger.classList.remove('active');
    }
  }
});



// Galerie

// pop-up gallery

let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-img img');

function openPopup(index) {
    currentImageIndex = index;
    document.getElementById("popup").style.display = "block";
    updatePopupImage();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function updatePopupImage() {
    const imgElement = document.getElementById("popup-image");
    imgElement.src = images[currentImageIndex].src;
}

function changeImage(step) {
    currentImageIndex += step;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updatePopupImage();
}

images.forEach((img, index) => {
    img.addEventListener('click', () => openPopup(index));
});


// Gestion du bouton retour en haut
const backToTopButton = document.querySelector('#back-to-top');

// Afficher le bouton quand on scrolle vers le bas
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Retour en haut lors du clic sur le bouton
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});