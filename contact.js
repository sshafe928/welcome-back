document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Simple validation (example)
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Please fill in all fields.');
            return;
        }

        // Example of handling form data (e.g., sending to a server)
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your message. We will get back to you shortly.');

        // Clear form
        form.reset();
    });
});