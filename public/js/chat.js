// const socket = new WebSocket('wss://localhost:3000');

// socket.addEventListener('open', (event) => {
//     console.log('Conexión establecida con el servidor WebSocket');
// });
// //socket.onmessage = (event) => { };
// socket.addEventListener('message', (event) => {
//     event.data.arrayBuffer().then((data) => {
//         const message = new TextDecoder('utf-8').decode(data);
//         //console.log(message);
//         const item = document.createElement('li');
//         item.textContent = message;
//         document.querySelector('#messages').appendChild(item);
//     });
// });

// document.querySelector('#form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const message = document.querySelector('#input').value;
//     if (socket.readyState === WebSocket.OPEN) {
//         socket.send(message);
//     }
//     const item = document.createElement('li');
//     item.textContent = message;
//     document.querySelector('#messages').appendChild(item);
//     document.querySelector('#input').value = '';
//     document.querySelector('#input').focus();
// });

document.addEventListener('DOMContentLoaded', () => {
    const socket = new WebSocket('wss://localhost:8000'); // Ajusta la URL según tu configuración

    socket.addEventListener('open', (event) => {
        console.log('Conexión establecida con el servidor WebSocket');
    });

    socket.addEventListener('message', (event) => {
        const message = event.data;
        const item = document.createElement('li');
        item.textContent = message;
        document.querySelector('#messages').appendChild(item);
    });

    document.querySelector('#form').addEventListener('submit', (e) => {
        e.preventDefault();
        const message = document.querySelector('#input').value;
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(message);
        }
        const item = document.createElement('li');
        item.textContent = message;
        document.querySelector('#messages').appendChild(item);
        document.querySelector('#input').value = '';
        document.querySelector('#input').focus();
    });

    socket.addEventListener('close', (event) => {
        console.log('Conexión cerrada:', event);
    });
});