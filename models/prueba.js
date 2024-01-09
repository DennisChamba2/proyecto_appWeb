const db = require("./firebase");

async function obtenerPlatillos() {
    try {
        // Obtener una referencia a la colección "platillos"
        const platillosSnapshot = (await db.collection("platillos").get());

        // Hacer algo con la referencia a la colección (por ejemplo, loggearla)
        console.log(platillosSnapshot.docs[0].data()); // Accede a los documentos de la colección
    } catch (error) {
        console.error("Error al obtener platillos:", error);
    }
}

// Llama a la función asincrónica
obtenerPlatillos();