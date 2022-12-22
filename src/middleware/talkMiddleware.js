const { HTTP_BAD_REQUEST } = require('../utils/statusCode');

const talkMiddleware = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

module.exports = talkMiddleware;