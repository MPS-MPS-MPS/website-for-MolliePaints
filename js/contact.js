document.addEventListener('DOMContentLoaded', function() {

  const urlParams = new URLSearchParams(window.location.search);
  const paintingName = urlParams.get('painting');

  if (paintingName) {
    const messageArea = document.getElementById('message');
    if (messageArea) {
      messageArea.value = `Hi Mollie,\n\nI would like to purchase "${paintingName}".\n\nWarm Regards,\n[Your name here]`;
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({behavior: 'smooth'});
    }
  }
});