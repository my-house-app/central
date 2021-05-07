/* eslint-disable camelcase */
const { v4: uuidv4 } = require('uuid');
const { Op, Sequelize } = require('sequelize');
const { Post, Property, Image } = require('../db.js');

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
// http://localhost:3001/posts?city=med&neighborhood=pol&prop_type=Apartamento
// http://localhost:3001/posts?city=med&neighborhood=pol&priceMin=0&priceMax=100000000
async function getPosts(req, res) {
  const limit = 10;
  const offset = Number(req.query.offset) || 0;
  const city = req.query.city || '';
  const neighborhood = req.query.neighborhood || '';
  // const prop_type = req.query.prop_type || '';
  // const priceMin = Number(req.query.priceMin) || 0;
  // const priceMax = Number(req.query.priceMax) || null;
  //     prop_type: '', // select
  // city: '', // input
  // neighborhood: '', // input

  // stratum: '', // select es un numero
  // priceMin: '',
  // priceMax: '',
  // areaMin: '',
  // areaMax: '',
  // rooms: '', // input number
  // bathrooms: '', // input number
  // years: '', // input number

  const { count, rows } = await Post.findAndCountAll(
    {
      limit,
      offset,
      attributes: ['id', 'post_name'],
      include: {
        model: Property,
        attributes: ['id', 'prop_type', 'city', 'neighborhood', 'rooms', 'm2', 'price'],
        where: {
          [Op.and]: [
            {
              city: {
                [Op.iLike]: `%${city}%`,
              },
            },
            {
              neighborhood: {
                [Op.iLike]: `%${neighborhood}%`,
              },
            },
            // {https://sequelize.org/v5/manual/querying.html
            //   prop_type: {
            //     [Op.iLike]: `%${prop_type}%`
            //     // [Sequelize.Op.in]: [prop_type],
            //   }
            // },
            // {
            //   price: {
            //     [Op.and]: {
            //       [Op.gte]: priceMin,
            //       [Op.lte]: priceMax
            //     }
            //     // [Op.gte]:  priceMin
            //     // [Sequelize.Op.between]: [priceMin, priceMax],
            //   }
            // }

          ],
        },
        include: {
          model: Image,
          attributes: ['id', 'photo'],
        },
      },
    },
  );
  return res.status(200).json(
    {
      count,
      posts: rows,
    },
  );
  // res.send({ message: 'Estos son todo las publicaciones' });
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
