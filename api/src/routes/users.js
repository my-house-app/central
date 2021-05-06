const router = require('express').Router();
const {
  addUser,
  deleteUser,
  updateUser,
  getUsers,
} = require('../controllers/users.js');
const middlewareError = require('../middleware/middlewareError.js');

router
  .route('/')
  .get(middlewareError(getUsers))
  .post(middlewareError(addUser))
  .put(middlewareError(updateUser))
  .delete(middlewareError(deleteUser));

module.exports = router;
