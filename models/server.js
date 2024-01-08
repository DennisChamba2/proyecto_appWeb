const express = require("express");

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
    //parceo y lectura de body
    this.app.use(express.json())

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