
document.addEventListener("DOMContentLoaded", function() {
    var formData = JSON.parse(localStorage.getItem("formData"));
    var usernameContainer = document.getElementById("username-container");
    var logoutButton = document.getElementById("logout-button");
    var signInLink = document.getElementById("sign-in-button");

    if (formData) {
        signInLink.style.display = "none";
        usernameContainer.textContent = "¡Bienvenido, " + formData.username + "!";
        logoutButton.style.display = "block";
    } else {
        logoutButton.style.display = "none";
    }
    document.getElementById("logout-button").addEventListener("click", function() {
        localStorage.removeItem("formData");
        window.location.reload();
    });
});