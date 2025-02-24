document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this);
        });
    });
});

// Reuse the same lightbox functionality from index.js
// You might want to create a shared lightbox.js file
