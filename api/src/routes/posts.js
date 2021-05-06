const router = require('express').Router();
const { addPost } = require('../controllers/posts.js');
const middlewareError = require('../middleware/middlewareError.js');

router.route(
  '/'
).post(middlewareError(addPost));

module.exports = router;