const { pool } = require('../config/db');

const getAllPostsData = async () => {
  const { rows } = await pool.query('SELECT * FROM posts');
  console.log(rows);
  return rows;
};

const addPost = async (titulo, img, descripcion, likes) => {
  const { rows } = await pool.query(
    'INSERT INTO posts (titulo,img,descripcion,likes) VALUES ($1,$2,$3,$4) RETURNING *',
    [titulo, img, descripcion, likes]
  );
  return rows;
};

const deletePostById = async (id) => {
  try {
    const post = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    if (!post) {
      console.log('No existe el post con el id ' + id);
      throw new Error('No existe el post con el id ' + id);
    }
    await pool.query('DELETE FROM posts WHERE id = $1 ', [id]);
    return 'Post con id ' + id + ' eliminado';
  } catch (error) {
    console.log(error);
    throw new Error('No es posible eliminar el post con el id ' + id);
  }
};

const updatePostLike = async (id) => {
  try {
    const { rows } = await pool.query('SELECT * FROM posts WHERE id = $1', [
      id,
    ]);
    console.log(rows[0].likes);
    if (!rows) {
      console.log('No existe el post con el id ' + id);
      throw new Error('No existe el post con el id ' + id);
    }

    await pool.query('UPDATE posts SET likes = $1 WHERE id = $2', [
      rows[0].likes == null ? 1 : rows[0].likes + 1,
      id,
    ]);
    return 'Post con id ' + id + ' actualizado';
  } catch (error) {
    console.log(error);
    throw new Error('No es posible actualizar el post con el id ' + id);
  }
};

module.exports = { getAllPostsData, addPost, deletePostById, updatePostLike };
