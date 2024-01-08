const { Router } = require("express");
const { general, menu, about, formulario, signup} = require("../controllers/index.controllers");

const router = Router()

  router.get("/", general );

  router.get("/menu", menu);

  router.get("/about", about);
  
  router.get("/producto", formulario);

  router.get("/signup", signup);


module.exports = router