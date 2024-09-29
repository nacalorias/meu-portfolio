function createManualCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  const images = carousel.querySelectorAll('.carousel-image');
  const prevBtn = carousel.querySelector('.prev-btn');
  const nextBtn = carousel.querySelector('.next-btn');
  let currentImageIndex = 0;

  function showImage(index) {
      images.forEach((img, i) => {
          img.classList.remove('active');
          if (i === index) {
              img.classList.add('active');
          }
      });
  }

  function showNextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
  }

  function showPrevImage() {
      
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
  }

  nextBtn.addEventListener('click', showNextImage);
  prevBtn.addEventListener('click', showPrevImage);

  
  showImage(currentImageIndex);
}


createManualCarousel('carousel-projeto1');
createManualCarousel('carousel-projeto2');
createManualCarousel('carousel-projeto3');
