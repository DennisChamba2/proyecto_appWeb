const express = require("express");
const fileUpload = require("express-fileupload")

class Server {
  constructor() {
    this.port = process.env.PORT
    this.app = express();
    this.RoutePath = "/"

    //middlewares
    this.middlewares()

    //rutas app 
    this.routes();

  }

  middlewares(){
    
    //fileupload 
    this.app.use(fileUpload({
      useTempFiles: true,
      tempFileDir: '/tmp/'
    }))
    // Middleware para parsear datos codificados en URL en el cuerpo de la solicitud
    this.app.use(express.urlencoded({ extended: false }));

    //parceo y lectura de body
    this.app.use(express.json())

    this.app.use(express.text())

    //plantillas
    this.app.set("view engine", "hbs")

    //directorio publico
    this.app.use(express.static('public'))


  }

  routes() {

    this.app.use(this.RoutePath, require('../routes/index.routes'))

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("http://localhost:" + this.port);
    });
  }
}

module.exports = Server