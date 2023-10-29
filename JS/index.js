const mostrarInput = document.getElementById('mostrar-input');
const campoTexto = document.getElementById('campo-texto');

mostrarInput.addEventListener('click', function(e) {
    campoTexto.style.display = 'block';
});

const username = localStorage.getItem("username");


if (username) {
    
    const usernameElement = document.createElement("span");
    usernameElement.textContent = username;
    usernameElement.className = "username";
    document.querySelector(".contenedor-imagen").appendChild(usernameElement);
}