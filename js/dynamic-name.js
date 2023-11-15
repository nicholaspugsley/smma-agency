document.addEventListener('DOMContentLoaded', function() {
    const companyName = "Echo SMMA"; // Update this variable to change the name everywhere
    const elements = document.querySelectorAll('.dynamic-company-name');

    elements.forEach(function(element) {
        element.textContent = companyName;
    });
});
