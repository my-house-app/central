const router = require('express').Router();
const {
  getPostById,
} = require('../controllers/post.js');
const middlewareError = require('../middleware/middlewareError.js');

router
  .route('/:id')
  .get(middlewareError(getPostById));

module.exports = router;
