const verifyEmail = require('./verifyEmail');
const verifyPassword = require('./verifyPassword');
const authMiddleware = require('./authMiddleware');
const nameMiddleware = require('./nameMiddleware');
const ageMiddleware = require('./ageMiddleware');
const talkMiddleware = require('./talkMiddleware');
const rateMiddleware = require('./rateMiddleware');
const watchedAtMiddleware = require('./watchedAtMiddleware');

module.exports = {
  verifyEmail,
  verifyPassword,
  authMiddleware,
  nameMiddleware,
  ageMiddleware,
  talkMiddleware,
  rateMiddleware,
  watchedAtMiddleware,
};