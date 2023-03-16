const { consulta } = require('../helpers/adminFetch');

// Mostrar todos los servicios
const mostrarServicios = async (req, res) => {
  const url = 'servicios';
  const method = 'get';

  const respuesta = await consulta(url, method);
  const { data } = await respuesta.json();

  res.render('../views/admi/templates/vistaNuevoServicio', {
    titulo: 'Servicios',
    descripcion: 'descripcion servicio',
    servicios: data,
  });
};

// Mostrar el formulario
const formCrearServicio = async (req, res) => {
  res.render('../views/admi/templates/vistaNuevoServicio');
};

// Crear un nuevo servicio
const crearServicio = async (req, res) => {
  const { servicio, descripcion } = req.body;
  const body = { servicio, descripcion };

  const url = 'servicios';
  const method = 'post';

  const respuesta = await consulta(url, method, body);
  const { ok, data } = respuesta;

  res.redirect('/admin/servicios/nuevo');
};

// Actualizar un servicio
const formActualizarServicio = async (req, res) => {
  try {
    const id = req.params.id;
    res.render('../views/admin/vistaUpdateServicio', {});
  } catch (error) {}
};

// Eliminar un servicio
const eliminarServicio = async (req, res) => {
  try {
    const id = req.params.id;
    const url = `servicios/${id}`;
    const method = 'delete';
    const respuesta = await consulta(url, method);
    const { ok, data } = respuesta;
    res.redirect('/admin/servicios');
  } catch (error) {}
};

module.exports = {
    mostrarServicios,
    formCrearServicio,
    crearServicio,
    formActualizarServicio,
    eliminarServicio
};