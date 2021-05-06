const { v4: uuidv4 } = require('uuid');
const posts = require('./posts');
const users = require('./users');

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

const visitDates = [];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 200; i++) {
  visitDates.push({
    id: uuidv4(),
    date: randomDate(new Date(), new Date(2022, 0, 1)),
    userId: users[Math.floor(Math.random() * users.length)].id,
    postId: posts[Math.floor(Math.random() * posts.length)].id,
  });
}

module.exports = visitDates;
