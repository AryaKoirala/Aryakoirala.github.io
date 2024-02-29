// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log("Form submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // You can add AJAX request or other logic here to handle form submission
    });
});
