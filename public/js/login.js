const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    
    fetch('/login', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Evitar que la respuesta se muestre directamente en la página
        event.preventDefault();

        if (data === "1") {
            document.location.href = '/menuA';
        } else {
            window.alert("Usuario y/o contraseña incorrecto")
        }
    })
    .catch(error => {
        window.alert("Usuario y/o contraseña incorrecto")
    });
});
