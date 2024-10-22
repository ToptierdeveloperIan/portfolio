// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation (can be expanded)
        if (name && email && message) {
            responseMessage.textContent = `Thank you, ${name}! Your message has been received.`;
            responseMessage.style.color = 'green';
            form.reset(); // Clears the form fields
        } else {
            responseMessage.textContent = 'Please fill out all fields.';
            responseMessage.style.color = 'red';
        }
    });
});
