const { HTTP_UNAUTHORIZED } = require('../utils/statusCode');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: 'Token não encontrado' });
  }
  const isAuth = typeof authorization === 'string' && authorization.length === 16;
  if (!isAuth) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: 'Token inválido' });
  }
  next();
};

module.exports = authMiddleware;