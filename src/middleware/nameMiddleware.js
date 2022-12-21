const { HTTP_BAD_REQUEST } = require('../utils/statusCode');

const nameMiddleware = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'O campo "name" é obrigatório' });
  }
  const isAuth = name.length >= 3;
  if (!isAuth) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

module.exports = nameMiddleware;