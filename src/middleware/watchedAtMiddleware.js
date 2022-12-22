const { HTTP_BAD_REQUEST } = require('../utils/statusCode');

const watchedAtMiddleware = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const dataRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  const testDate = dataRegex.test(watchedAt);
  if (!watchedAt) {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!testDate) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

module.exports = watchedAtMiddleware;