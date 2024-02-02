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
module.exports = { getAllPostsData, addPost };
