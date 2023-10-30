
document.addEventListener("DOMContentLoaded", function() {
    var formData = JSON.parse(localStorage.getItem("formData"));

    var usernameContainer = document.getElementById("username-container");

    var logoutButton = document.getElementById("logout-button");

    var signInLink = document.getElementById("sign-in-button");

    // Si hay datos de formulario en el localStorage, oculta el enlace de "Sign In"
    if (formData) {
        // Si hay datos de formulario en el localStorage, oculta el enlace de "Sign In"
        signInLink.style.display = "none";

        // Accede al elemento HTML por su ID y actualiza su contenido con el username
        usernameContainer.textContent = "¡Bienvenido, " + formData.username + "!";
        
        // Muestra el botón de "Cerrar Sesión"
        logoutButton.style.display = "block";
    } else {
        // Si no hay datos de formulario en el localStorage, no se muestra ningún mensaje
        // y se oculta el botón de "Cerrar Sesión"
        logoutButton.style.display = "none";
    }

    document.getElementById("logout-button").addEventListener("click", function() {
        // Limpia los datos del formulario del localStorage al hacer clic en "Cerrar Sesión"
        localStorage.removeItem("formData");

        window.location.reload();
    });
});