const { Router } = require("express");
const { general, menu, about} = require("../controllers/index.controllers");

const router = Router()

  router.get("/", general );

  router.get("/menu", menu);

  router.get("/about", about);

module.exports = router