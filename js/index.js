window.addEventListener('scroll', function() {

  const sections = document.querySelectorAll('.painting-section');
  const catalogueLink = this.document.getElementById('catalogue');
  const homeLink = this.document.getElementById('home');

  const firstPaintingTop = sections[0].getBoundingClientRect().top;
  if (firstPaintingTop < this.window.innerHeight * 0.5) {
    catalogueLink.style.color = 'lightcoral';
    homeLink.style.color = '#333';
  } else {
    catalogueLink.style.color = '#333';
    homeLink.style.color = 'lightcoral';
  }


  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.75) {
          section.classList.add('active');
      } else {
          section.classList.remove('active');
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const paintingImages = document.querySelectorAll('.painting-image img');
    
    paintingImages.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this);
        });
    });
});
