require("dotenv").config()

const claseServer = require('./models/Server')

const server = new claseServer();

server.listen()

