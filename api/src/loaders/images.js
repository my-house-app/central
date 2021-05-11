const { v4: uuidv4 } = require('uuid');
const rawData = require('./rawData');
const posts = require('./posts');

const postsId = posts.map((p) => p.id);
const images = rawData.map(({ imageLink }) => ({
  id: uuidv4(),
  photo: [imageLink, 'https://metrocuadrado.blob.core.windows.net/inmuebles/2453-M2713849/2453-M2713849_7_h.jpg', 'https://metrocuadrado.blob.core.windows.net/inmuebles/2453-M2713849/2453-M2713849_12_h.jpg'],
  postId: postsId.pop(),
}));

module.exports = images;
