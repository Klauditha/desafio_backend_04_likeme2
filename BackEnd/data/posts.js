const { pool } = require('../config/db');
const {
  selectAllQuery,
  insertPostQuery,
  deletePostQuery,
  updatePostQuery,
} = require('../querys/index.js');

const getAllPostsData = async () => {
  const { rows } = await pool.query(selectAllQuery);
  return rows;
};

const addPostData = async (titulo, img, descripcion) => {
  const { rows } = await pool.query(insertPostQuery, [
    titulo,
    img,
    descripcion,
    0,
  ]);
  return rows;
};

const deletePostData = async (id) => {
  try {
    await pool.query(deletePostQuery, [id]);
    return 'Post con id ' + id + ' eliminado';
  } catch (error) {
    console.log(error);
    throw new Error('No es posible eliminar el post con el id ' + id);
  }
};

const updatePostData = async (id, titulo, img, descripcion, likes) => {
  console.log(id, titulo, img, descripcion, likes);
  try {
    await pool.query(updatePostQuery, [titulo, img, descripcion, likes, id]);
    return 'Post con id ' + id + ' actualizado';
  } catch (error) {
    console.log(error);
    throw new Error('No es posible actualizar el post con el id ' + id);
  }
};

module.exports = {
  getAllPostsData,
  addPostData,
  deletePostData,
  updatePostData,
};
