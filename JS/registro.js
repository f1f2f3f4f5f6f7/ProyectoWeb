document.getElementById('enviarBtn').addEventListener('click', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    
    localStorage.setItem("username", username);

    
    window.location.href = '../index.html';
});
