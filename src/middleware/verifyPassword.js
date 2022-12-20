const { HTTP_BAD_REQUEST } = require('../utils/statusCode');

const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = verifyPassword;