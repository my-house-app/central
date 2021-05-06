const { Post, Property } = require('../db.js');
const { v4: uuidv4 } = require('uuid');

async function addPost(req, res, next) {
  const id = uuidv4();

  const { post_name, premium, city, street_number, zip_code, neighborhood, price, m2, rooms } = req.body;

  let newPost = {
    id,
    post_name,
    premium,
  }

  let newProperty = {
    id,
    city,
    street_number,
    zip_code,
    neighborhood,
    price,
    m2,
    rooms,
  }

  await Post.create(newPost);
  await Property.create(newProperty);
  res.send({ message: 'Se creo exitosamente un nuevo post!' });
}

module.exports = {
  addPost
}