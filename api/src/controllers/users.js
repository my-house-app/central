// const { User } = require('../db.js');

async function getUsers(req, res) {
  res.send({ message: 'Estos son todo los usuarios' });
}
async function addUser(req, res) {
  res.send({ message: 'Se creo exitosamente un nuevo Usuario!' });
}

async function deleteUser(req, res) {
  res.send({ message: 'Se borro el usuario X' });
}
async function updateUser(req, res) {
  res.send({ message: 'Se actualizó el usuario Y' });
}

module.exports = {
  addUser,
  deleteUser,
  updateUser,
  getUsers,
};
