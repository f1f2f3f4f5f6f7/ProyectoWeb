document.getElementById("enviarBtn").addEventListener("click", function(event) {
    event.preventDefault();
    var loginExitoso = true;

    if (loginExitoso) {
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var formData = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem("formData", JSON.stringify(formData));
        window.location.href = '../index.html';
    } else {
        console.log("Inicio de sesión fallido");
    }
});
