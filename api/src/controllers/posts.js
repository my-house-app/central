/* eslint-disable camelcase */
const { v4: uuidv4 } = require('uuid');
// const { Op, Sequelize } = require('sequelize');
const { Post, Property, Image } = require('../db.js');
const { buidlWhere, getCurrentPage, getCurrentEndPoint } = require('../utils');

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

// Ejemplos de un pedido
// http://localhost:3001/posts?city=med&neighborhood=pol&prop_type=Apartamento
// http://localhost:3001/posts?city=med&neighborhood=pol&priceMin=0&priceMax=100000000
async function getPosts(req, res) {
  const limit = 10;
  const offset = Number(req.query.offset) || 0;
  const block = {
    city: req.query.city || '',
    neighborhood: req.query.neighborhood || '',
    prop_type: req.query.prop_type || '',
    priceMin: Number(req.query.priceMin) || 0,
    priceMax: Number(req.query.priceMax) || null,
    areaMin: Number(req.query.areaMin) || 0,
    areaMax: Number(req.query.areaMax) || null,
    stratum: Number(req.query.stratum) || null,
    rooms: Number(req.query.rooms) || null,
    bathrooms: Number(req.query.bathrooms) || null,
    years: Number(req.query.years) || null,
  };

  const queryPost = {
    limit,
    offset,
    attributes: ['id', 'post_name'],
    include: {
      model: Property,
      attributes: ['id', 'prop_type', 'city', 'neighborhood', 'm2', 'price', 'stratum', 'rooms', 'bathrooms', 'years'],
      where: buidlWhere(block),
      include: {
        model: Image,
        attributes: ['id', 'photo'],
      },
    },
  };

  const { count, rows } = await Post.findAndCountAll(queryPost);

  return res.status(200).json(
    {
      count,
      posts: rows,
      currentPage: getCurrentPage(offset, limit),
      selfEndpoint: getCurrentEndPoint(block, offset),
    },
  );
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
