const { Router } = require("express");
const { general, menu, about, formulario, signup, registroFormulario, menuAdmin, borrarMenu, chat} = require("../controllers/index.controllers");

const router = Router()

  router.get("/", general );

  router.get("/menu", menu);

  router.get("/about", about);

  router.get("/chat", chat);
  
  router.get("/producto", formulario);
  
  router.get("/signup", signup);
  
  router.post("/producto", registroFormulario);
  
  router.get("/menuA", menuAdmin);
  
  router.delete("/producto/:id", borrarMenu);

module.exports = router