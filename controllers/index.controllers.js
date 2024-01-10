const db = require("../models/firebase");
const { response, request } = require("express");
const path = require("path");

const general = (req = request, res = response) => {
  res.render("../public/views/index.hbs");
};

const menu = (req = request, res = response) => {
  res.render("../public/views/menu.hbs");
};

const about = (req = request, res = response) => {
  res.render("../public/views/about.hbs");
};

const formulario = (req = request, res = response) => {
  res.render("../public/views/nuevoProducto.hbs");
};

const signup = (req = request, res = response) => {
  res.render("../public/views/signup.hbs");
};

const registroFormulario = async (req = request, res = response) => {
  const { nombre, precio, descripcion } = req.body;
  const { foto } = req.files;

  //mover archivos cargados a carpeta updates
  const uploadPath = path.join(__dirname, "../updates", foto.name);

  foto.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).json({ err });
    }
  });

  const carga = async (nombre, precio, img, descripcion) => {
    const platilloNuevo = {
      nombre: nombre,
      precio: Number(precio),
      descripcion: descripcion,
      foto: img,
    };
    await db.collection("platillos").add(platilloNuevo);
  };

  try {
    await carga(nombre, precio, uploadPath, descripcion);
    res.header('Content-Type', 'application/json').send({ success: true });

  } catch (error) {
    console.error("Error al cargar el platillo:", error);
    res.header('Content-Type', 'application/json').send({ success: false });
  }

};



module.exports = {
  general,
  menu,
  about,
  formulario,
  signup,
  registroFormulario,
};
