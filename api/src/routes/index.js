const { Router } = require('express');
const postsRouter = require('./posts.js');
const users = require('./users');
const postRouter = require('./post');

const router = Router();

router.use('/posts', postsRouter);
router.use('/users', users);
router.use('/post', postRouter);

module.exports = router;
