document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const thankYouMessage = document.createElement('div');
    thankYouMessage.className = "thank-you-message";
    thankYouMessage.textContent = "Thank you for your message! We'll be in touch soon.";
    thankYouMessage.style.display = "none";
    form.parentNode.insertBefore(thankYouMessage, form.nextSibling);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            },
        })
        .then(response => {
            if(response.ok) {
                form.reset();
                form.style.display = "none";
                thankYouMessage.style.display = "block";
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
