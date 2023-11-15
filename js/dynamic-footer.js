document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerElement = document.getElementById('footer-text');
    if (footerElement) {
        footerElement.textContent = `Echo SMMA © ${currentYear}. All Rights Reserved.`;
    }
});
