const { HTTP_BAD_REQUEST } = require('../utils/statusCode');

const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'O campo "email" é obrigatório' });
  }

  const setEmailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const testEmail = setEmailRegex.test(email);
  if (!testEmail) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = verifyEmail;