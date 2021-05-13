const router = require('express').Router();
const {
  addPost,
  deletePost,
  updatePost,
  getPosts,
} = require('../controllers/posts.js');
const middlewareError = require('../middleware/middlewareError.js');

router
  .route('/')
  .post(middlewareError(addPost))
  .get(middlewareError(getPosts))
  .put(middlewareError(updatePost))
  .delete(middlewareError(deletePost));

module.exports = router;
