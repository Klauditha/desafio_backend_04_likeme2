const selectAllQuery = 'SELECT * FROM posts ORDER BY id';
const insertPostQuery =
  'INSERT INTO posts (titulo,img,descripcion,likes) VALUES ($1,$2,$3,$4) RETURNING *';
const updatePostQuery =
  'UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5';
const deletePostQuery = 'DELETE FROM posts WHERE id = $1';
const verifyPostExistQuery = 'SELECT * FROM posts WHERE id = $1';

module.exports = {
  verifyPostExistQuery,
  selectAllQuery,
  insertPostQuery,
  deletePostQuery,
  updatePostQuery,
};
