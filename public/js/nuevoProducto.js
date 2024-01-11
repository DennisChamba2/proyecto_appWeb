const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    
    fetch('/producto', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Evitar que la respuesta se muestre directamente en la página
        event.preventDefault();

        console.log('Respuesta del servidor:', data);

        if (data.success === true) {
            window.alert("Producto cargado exitosamente")
            document.location.href = '/menuA';
        } else {
            window.alert("Fallo al cargar el producto")
        }
    })
    .catch(error => {
        window.alert("Fallo al cargar el producto")
    });
});