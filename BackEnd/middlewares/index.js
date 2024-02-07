const { pool } = require('../config/db');
const { verifyPostExistQuery } = require('../querys/index.js');

const validaIdPost = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id) {
      const query_result = await pool.query(verifyPostExistQuery, [id]);
      const post = query_result.rows[0];
      if (!post) {
        return res.status(404).json({
          status: 'Not Found',
          message: 'El post no exist para el id ' + id,
        });
      } else {
        req.data = {
          postExist: true,
          post,
        };
        next();
      }
    } else {
      return res.status(400).json({
        status: 'Bad Request',
        message: 'El id es requerido',
      });
    }
  } catch (error) {
    next(error);
  }
};

const validaDataNuevoPost = async (req, res, next) => {
  const { titulo, url, descripcion } = req.body;
  if (!titulo || !url || !descripcion) {
    return res.status(400).json({
      status: 'Bad Request',
      message: 'Todos los campos son obligatorios',
    });
  } else {
    next();
  }
};

module.exports = {
  validaIdPost,
  validaDataNuevoPost,
};
