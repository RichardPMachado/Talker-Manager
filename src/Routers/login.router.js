const express = require('express');
const { tokenGenerator } = require('../utils/server');
const { verifyEmail, verifyPassword } = require('../middleware/index');

const { HTTP_OK_STATUS,
} = require('../utils/statusCode');

const loginRouter = express.Router();

loginRouter.post('/login', verifyEmail, verifyPassword, (_request, response) => {
  const token = tokenGenerator();
  return response.status(HTTP_OK_STATUS).json({ token });
});

module.exports = loginRouter;