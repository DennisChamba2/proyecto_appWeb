const { Router } = require("express");
const { general, menu, about, formulario} = require("../controllers/index.controllers");

const router = Router()

  router.get("/", general );

  router.get("/menu", menu);

  router.get("/about", about);
  
  router.get("/producto", formulario);


module.exports = router