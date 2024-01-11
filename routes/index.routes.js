const { Router } = require("express");
const { general, menu, 
  about, formulario, 
  signup, registroFormulario,
   menuAdmin, borrarMenu,
  mostrarProducto, modificarProducto,
  chat, login} = require("../controllers/index.controllers");

const router = Router()

  router.get("/", general );

  router.get("/menu", menu);

  router.get("/about", about);
  
  router.get("/producto", formulario);
  
  router.get("/signup", signup);
  
  router.post("/producto", registroFormulario);
  
  router.get("/menuA", menuAdmin);
  
  router.delete("/producto/:id", borrarMenu);

  router.get("/producto/:id", mostrarProducto);

  router.put("/producto/:id", modificarProducto);

  //chat

  router.get("/chat", chat)

  //login
  router.get("/login", login )

module.exports = router