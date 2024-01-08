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


module.exports = {
  general,
  menu,
  about, 
  formulario
};
