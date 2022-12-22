const { HTTP_BAD_REQUEST } = require('../utils/statusCode');

const rateMiddleware = (req, res, next) => {
  const { talk: { rate } } = req.body;
  if (rate === undefined) {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'O campo "rate" é obrigatório' });
  }
    const rateTest = !Number.isInteger(rate) || rate < 1 || rate > 5;
  if (rateTest) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

module.exports = rateMiddleware;