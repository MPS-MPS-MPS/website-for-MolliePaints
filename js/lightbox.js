let currentImageIndex = 0;
let images;

function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.querySelector('.lightbox-title');
    
    // Get all images in the current context
    images = document.querySelectorAll('.gallery-item img, .painting-image img');
    
    // Find the index of clicked image
    currentImageIndex = Array.from(images).indexOf(img);
    
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    
    // Get the title from nearest heading
    const section = img.closest('.show-section, .painting-section');
    const title = section ? section.querySelector('h2').textContent : '';
    lightboxTitle.textContent = title;
}

function changeImage(direction) {
    event.stopPropagation();
    
    currentImageIndex += direction;
    
    // Loop around if at the ends
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    
    const newImage = images[currentImageIndex];
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.querySelector('.lightbox-title');
    
    lightboxImg.src = newImage.src;
    
    // Update title
    const section = newImage.closest('.show-section, .painting-section');
    const title = section ? section.querySelector('h2').textContent : '';
    lightboxTitle.textContent = title;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (event.target !== document.getElementById('lightbox-img')) {
        lightbox.style.display = 'none';
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (document.getElementById('lightbox').style.display === 'block') {
        if (event.key === 'ArrowRight') changeImage(1);
        if (event.key === 'ArrowLeft') changeImage(-1);
        if (event.key === 'Escape') closeLightbox();
    }
}); 