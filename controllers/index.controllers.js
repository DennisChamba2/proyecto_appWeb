const { response, request } = require("express");

const general = (req = request, res = response) => {
  res.render('../public/views/index.hbs');
}

const menu = (req = request, res = response) => {
  res.render('../public/views/menu.hbs');
};

const about = (req = request, res = response) => {
  res.render('../public/views/about.hbs');
};

const formulario = (req = request, res = response) => {
  res.render('../public/views/nuevoProducto.hbs');
};

const signup = (req = request, res = response) => {
  res.render('../public/views/signup.hbs');
};

const registroFormulario = (req = request, res = response) =>{
  console.log(req.body);
}


module.exports = {
  general,
  menu,
  about, 
  formulario,
  signup,
  registroFormulario
};
