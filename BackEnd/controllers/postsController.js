const {
  getAllPostsData,
  addPostData,
  deletePostData,
  updatePostData,
  getPostData
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
    const { titulo, url, descripcion } = req.body;
    if (!titulo || !url || !descripcion) {
      res.status(400).send('Todos los campos son obligatorios');
      return;
    }
    const results = await addPostData(titulo, url, descripcion);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { data } = req;
  const { postExist } = data;

  try {
    if (postExist) {
      const postToDelete = await getPostData(id);
      const query_delete = await deletePostData(id);
      
      res.status(200).json({
        status:"SUCCESS",
        message: query_delete,
        post: postToDelete
      });
    }
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { data } = req;
  const { postExist, post } = data;

  try {
    if (postExist) {
      const titulo = req.body.titulo || post.titulo;
      const img = req.body.url || post.img;
      const descripcion = req.body.descripcion || post.descripcion;
      const likes = req.body.likes || post.likes;
  
      const update_query = await updatePostData(
        id,
        titulo,
        img,
        descripcion,
        likes + 1
      );
      
      const postUpdated  = await getPostData(id);
      res.status(200).json({
        status:"SUCCESS",
        message: update_query,
        post: postUpdated
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
};
