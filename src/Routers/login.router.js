const express = require('express');
const { token } = require('../utils/server');

const { HTTP_OK_STATUS,
} = require('../utils/statusCode');

const loginRouter = express.Router();

loginRouter.post('/login', (_request, response) => response
  .status(HTTP_OK_STATUS).json({ token: token() }));

module.exports = loginRouter;