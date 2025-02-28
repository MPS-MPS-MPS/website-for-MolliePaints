document.addEventListener('DOMContentLoaded', function() {

  const urlParams = new URLSearchParams(window.location.search);
  const paintingName = urlParams.get('painting');
  const isMobile = window.innerWidth <= 768;

  if (paintingName) {
    const messageArea = document.getElementById('message');
    if (messageArea) {
      messageArea.value = `Hi Mollie,\n\nI would like to purchase "${paintingName}".\n\nWarm Regards,\n[Your name here]`;
    }

    // Only scroll on desktop
    if (!isMobile) {
      const contactForm = document.querySelector('.contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
});