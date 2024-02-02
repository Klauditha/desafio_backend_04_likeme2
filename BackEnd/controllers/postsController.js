const { getAllPostsData, addPost } = require('../data/posts.js');

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

module.exports = {
  getAllPosts,
  createPost,
};
