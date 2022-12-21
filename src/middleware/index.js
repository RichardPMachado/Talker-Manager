const verifyEmail = require('./verifyEmail');
const verifyPassword = require('./verifyPassword');
const authMiddleware = require('./authMiddleware');
const nameMiddleware = require('./nameMiddleware');

module.exports = {
  verifyEmail,
  verifyPassword,
  authMiddleware,
  nameMiddleware,
};