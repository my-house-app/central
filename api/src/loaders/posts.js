const { v4: uuidv4 } = require('uuid');
const properties = require('./properties');

const premiumRate = 0.2;

const posts = properties.map(({ id, userId, description }) => ({
  id: uuidv4(),
  propertyId: id,
  userId,
  post_name: description,
  premium: Math.random() < premiumRate,
}));

module.exports = posts;
