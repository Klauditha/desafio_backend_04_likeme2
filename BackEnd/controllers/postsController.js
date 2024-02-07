const {
  getAllPostsData,
  addPost,
  deletePostById,
  updatePostLike,
} = require('../data/posts.js');

const getAllPosts = async (req, res) => {
  try {
    const results = await getAllPostsData();
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createPost = async (req, res) => {
  try {
    const { titulo, url, descripcion, likes } = req.body;
    if (!titulo || !url || !descripcion) {
      res.status(400).send('Todos los campos son obligatorios');
      return;
    }
    const results = await addPost(titulo, url, descripcion, likes);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePost = async (req, res) => {
  console.log('entro a deletePost');
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send('El id es obligatorio');
    }
    const results = await deletePostById(id);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send('El id es obligatorio');
    }
    const results = await updatePostLike(id);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
};
