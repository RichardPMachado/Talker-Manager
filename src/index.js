const express = require('express');
const { getAllUser } = require('./utils/handleUser');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();  
});

app.get('/talker', async (_request, response) => {
  const users = await getAllUser(); 
  response.status(HTTP_OK_STATUS).json(users);
});

app.listen(PORT, () => {
  console.log('Online');
});
