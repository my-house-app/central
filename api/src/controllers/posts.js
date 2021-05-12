/* eslint-disable no-multi-spaces */
/* eslint-disable key-spacing */
/* eslint-disable camelcase */
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const { Post, Image } = require('../db.js');
const {
  buidlWhere, getCurrentPage,
} = require('../utils');

function addPost(req, res) {
  // Create a new id
  const id = uuidv4();
  // Get all the required info by params
  const {
    post_name,
    premium,
    prop_type,
    department,
    city,
    street_number,
    description,
    stratum,
    neighborhood,
    price,
    m2,
    rooms,
    bathrooms,
    years,
    pool,
    backyard,
    gym,
    bbq,
    parking_lot,
    garden,
    elevator,
    security,
  } = req.body;
  // Get the coordinates with the address
  const apiKey = 'RwOMALg8LILEQgTjBivW7TigzNNsyrG5mfGvpr6yZbw';
  const street = street_number.replace(/\s/g, '+').replace(/#/g, '%23');
  const address = 'Colombia+'.concat(department, '+', city, '+', street);
  const url = encodeURI(address.concat(`&apiKey=${apiKey}`));
  console.log('url: ', url);

  axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=${url}`)
    .then((r) => {
      /* console.log('Longitude: ', r.data.items[0].position.lng);
      console.log('Latitude: ', r.data.items[0].position.lat); */
      const coordinates = {
        longitude: parseFloat(r.data.items[0].position.lng),
        latitude: parseFloat(r.data.items[0].position.lat),
      };
      const newPost = {
        id,
        post_name,
        premium,
        prop_type,
        department,
        city,
        street_number,
        longitude: coordinates.longitude,
        latitude: coordinates.latitude,
        description,
        stratum,
        neighborhood,
        price,
        m2,
        rooms,
        bathrooms,
        years,
        pool,
        backyard,
        gym,
        bbq,
        parking_lot,
        garden,
        elevator,
        security,
      };
      console.log('newPost: ', newPost);
      return newPost;
    })
    .then((post) => {
      console.log('Post to create: ', post);
      Post.create(post);
    })
    .catch((e) => console.error("Couldn't fetch data", e));

  // Falta agregar la relación con el user
  res.send({ message: 'Post successfully created!' });
}

// Ejemplos de un pedido
// http://localhost:3001/posts?city=med&neighborhood=pol&prop_type=Apartamento
// http://localhost:3001/posts?city=med&neighborhood=pol&priceMin=0&priceMax=100000000
async function getPosts(req, res) {
  const limit =  Number(req.query.limit)  || 10;
  const page = Number(req.query.page) || 1;// falta una validacion
  const offset = (page * limit) - limit;
  const atributo = req.query.atributo || null;
  const orden =    req.query          || null;
  const block = {
    post_name:    req.query.post_name      || '',
    city:         req.query.city           || '',
    neighborhood: req.query.neighborhood   || '',
    prop_type:    req.query.prop_type      || '',
    priceMin:  Number(req.query.priceMin)  || 0,
    priceMax:  Number(req.query.priceMax)  || null,
    areaMin:   Number(req.query.areaMin)   || 0,
    areaMax:   Number(req.query.areaMax)   || null,
    stratum:   Number(req.query.stratum)   || null,
    rooms:     Number(req.query.rooms)     || null,
    bathrooms: Number(req.query.bathrooms) || null,
    years:     Number(req.query.years)     || null,
    pool:        req.query.pool || null,
    backyard:    req.query.pool || null,
    gym:         req.query.gym  || null,
    bbq:         req.query.bbq  || null,
    parking_lot: req.query.parking_lot || null,
    elevator:    req.query.elevator || null,
    security:    req.query.security || null,
    garden:      req.query.garden   || null,
  };

  const queryPost = {
    limit,
    offset,
    where: buidlWhere(block),
    include: {
      model: Image,
      attributes: ['id', 'photo'],
    },
    attributes: {
      exclude:['createdAt', 'updatedAt'],
    },
  };

  if (atributo && orden) {
    queryPost.order = [[atributo, orden]];
  }

  const { count, rows } = await Post.findAndCountAll(queryPost);

  return res.status(200).json(
    {
      count,
      posts: rows,
      currentPage: getCurrentPage(offset, limit),
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
