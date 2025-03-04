document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const submitButton = document.getElementById('submitButton');

    // Handle painting query parameter
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

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        const formData = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            submitButton.textContent = 'Sent!';
            submitButton.style.backgroundColor = 'lightcoral';
            submitButton.style.color = 'white';
            form.reset();
        })
        .catch(error => {
            submitButton.textContent = 'Error - Try Again';
            submitButton.disabled = false;
            console.error('Error:', error);
        });
    });
});