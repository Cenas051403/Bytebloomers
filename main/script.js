document.addEventListener("DOMContentLoaded", () => {
    // Default user account
    const defaultUser = {
        username: "bytebloomers", // Predefined username
        password: "bloomers123" // Predefined password
    };

    // Login form functionality
    const loginForm = document.querySelector(".form_front");

    loginForm.querySelector("button").addEventListener("click", (e) => {
        e.preventDefault();

        // Get input values from the login form
        const username = loginForm.querySelector('input[placeholder="Username"]').value.trim();
        const password = loginForm.querySelector('input[placeholder="Password"]').value.trim();

        // Check if the input username and password match the default account
        if (username === defaultUser.username && password === defaultUser.password) {
            // If the credentials are correct, store the logged-in user data
            localStorage.setItem("loggedInUser", JSON.stringify(defaultUser));

            // Redirect to the dashboard
            window.location.href = "./weather/weather.html";  // Change this to the actual dashboard URL
        } else {
            alert("Invalid username or password.");
        }
    });
});


