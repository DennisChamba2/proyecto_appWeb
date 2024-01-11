const db = require("../models/firebase");
const { response, request } = require("express");
const path = require("path");

const general = (req = request, res = response) => {
  res.render("../public/views/index.hbs");
};

const menu = async(req = request, res = response) => {
  const platillosSnapshot = await db.collection("platillos").get()
  const platillos = []


  platillosSnapshot.forEach((doc) => {
    platillos.push(doc.data());
  });

  // Agrupar los platillos en grupos de tres
  const platillosGrupos = [];
  for (let i = 0; i < platillos.length; i += 3) {
    platillosGrupos.push(platillos.slice(i, i + 3));
  }

  res.render("../public/views/menu.hbs", {platillosGrupos});
};

const menuAdmin = async(req = request, res = response) => {
  const platillosSnapshot = await db.collection("platillos").get()
  const platillos = []


  platillosSnapshot.forEach((doc) => {
    platillos.push({ id: doc.id, ...doc.data() });
  });

  // Agrupar los platillos en grupos de tres
  const platillosGrupos = [];
  for (let i = 0; i < platillos.length; i += 3) {
    platillosGrupos.push(platillos.slice(i, i + 3));
  }

  res.render("../public/views/menuAdmin.hbs", {platillosGrupos});
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
  const uploadPath = path.join(__dirname, "../public/updates", foto.name);
  const uploadPathFire = path.join("../updates", foto.name);

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
      foto: img.replace(/\\/g, "/"),
    };
    await db.collection("platillos").add(platilloNuevo);
  };

  try {
    await carga(nombre, precio, uploadPathFire, descripcion);
    res.header('Content-Type', 'application/json').send({ success: true });

  } catch (error) {
    console.error("Error al cargar el platillo:", error);
    res.header('Content-Type', 'application/json').send({ success: false });
  }

};

const borrarMenu = async(req=request, res=response)=>{
  const {id} = req.params
  try {
    await db.collection("platillos").doc(id).delete()
    res.header('Content-Type', 'application/json').send({ success: true });
  } catch (error) {
    console.error("Error al cargar el platillo:", error);
    res.header('Content-Type', 'application/json').send({ success: false });
  }
}


module.exports = {
  general,
  menu,
  about,
  formulario,
  signup,
  registroFormulario,
  menuAdmin,
  borrarMenu
};
