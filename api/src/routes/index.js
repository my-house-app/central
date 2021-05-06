const { Router } = require('express');
const postsRouter = require('./posts.js');

const router = Router();

router.use('/posts', postsRouter);

module.exports = router;
