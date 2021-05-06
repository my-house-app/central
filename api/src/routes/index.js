const { Router } = require('express');
const postsRouter = require('./posts.js');
const users = require('./users');

const router = Router();

router.use('/posts', postsRouter);
router.use('/users', users);

module.exports = router;
