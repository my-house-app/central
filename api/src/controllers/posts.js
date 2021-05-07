/* eslint-disable camelcase */
const { v4: uuidv4 } = require('uuid');
const { Post, Property } = require('../db.js');

async function addPost(req, res) {
  const id = uuidv4();

  const {
    post_name,
    premium,
    city,
    street_number,
    zip_code,
    neighborhood,
    price,
    m2,
    rooms,
  } = req.body;

  const newPost = {
    id,
    post_name,
    premium,
  };

  const newProperty = {
    id,
    city,
    street_number,
    zip_code,
    neighborhood,
    price,
    m2,
    rooms,
  };

  await Post.create(newPost);
  await Property.create(newProperty);
  res.send({ message: 'Se creo exitosamente un nuevo post!' });
}

async function getPosts(req, res) {
  res.send({ message: 'Estos son todo las publicaciones' });
}

async function deletePost(req, res) {
  res.send({ message: 'Se borro la publicacion X' });
}
async function updatePost(req, res) {
  res.send({ message: 'Se actualizó la publicacion Y' });
}

module.exports = {
  addPost,
  deletePost,
  updatePost,
  getPosts,
};
