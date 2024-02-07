const express = require('express');

const { postsController } = require('../controllers/index.js');
const { getAllPosts, createPost, deletePost, updatePost } = postsController;
const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.put('/like/:id', postsController.updatePost);


module.exports = router;
