const { HTTP_BAD_REQUEST } = require('../utils/statusCode');

const ageMiddleware = (req, res, next) => {
  const { age } = req.body;
  if (age === undefined) {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'O campo "age" é obrigatório' });
  }
  const minAge = +age < 18;
  if (minAge) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

module.exports = ageMiddleware;