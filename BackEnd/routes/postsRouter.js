const express = require('express');
const { postsController } = require('../controllers/index.js');
const router = express.Router();
const {
  validaIdPost,
  validaDataNuevoPost,
} = require('../middlewares/index.js');

router.get('/', postsController.getAllPosts);
router.post('/', validaDataNuevoPost, postsController.createPost);
router.delete('/:id', validaIdPost, postsController.deletePost);
router.put('/like/:id', validaIdPost, postsController.updatePost);

module.exports = router;
