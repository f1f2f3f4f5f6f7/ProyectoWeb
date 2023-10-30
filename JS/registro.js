document.getElementById("enviarBtn").addEventListener("click", function(event) {
    event.preventDefault();

    var loginExitoso = true;

    if (loginExitoso) {
        // Obtiene los valores del formulario
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Crea un objeto con los datos del formulario
        var formData = {
            username: username,
            email: email,
            password: password
        };

        // Guarda el objeto completo en el localStorage
        localStorage.setItem("formData", JSON.stringify(formData));

        // Redirige al usuario a la página principal
        window.location.href = '../index.html';
    } else {
        // Maneja el caso cuando el inicio de sesión no es exitoso
        console.log("Inicio de sesión fallido");
    }
});
