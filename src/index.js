const express = require('express');

const { loginRouter, talkerRouter } = require('./Routers/index');

const { HTTP_OK_STATUS, PORT,
 } = require('./utils/statusCode');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();  
});

app.use(loginRouter);
app.use(talkerRouter);

app.listen(PORT, () => {
  console.log('Online');
});
