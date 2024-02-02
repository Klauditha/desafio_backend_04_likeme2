const express = require('express');

const { postsController } = require('../controllers/index.js');
const { getAllPosts, createPost } = postsController;
const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createPost);

module.exports = router;
