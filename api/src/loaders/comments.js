const { v4: uuidv4 } = require('uuid');
const posts = require('./posts');
const users = require('./users');

const comments = [];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 200; i++) {
  comments.push({
    id: uuidv4(),
    stars: Math.floor(Math.random() * 6),
    description: 'To be determined',
    userId: users[Math.floor(Math.random() * users.length)].id,
    postId: posts[Math.floor(Math.random() * posts.length)].id,
  });
}

module.exports = comments;
