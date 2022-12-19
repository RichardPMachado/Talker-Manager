const express = require('express');
const { getAllSpeakers, findSpeakerById, token } = require('./utils/server');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const HTTP_BAD_REQUEST = 404;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();  
});

app.get('/talker', async (_request, response) => {
  const talkers = await getAllSpeakers(); 
  response.status(HTTP_OK_STATUS).json(talkers);
});

app.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await getAllSpeakers(); 
  const talker = await findSpeakerById(talkers, id);
  console.log(await talker);
  if (!talker) {
    return response.status(HTTP_BAD_REQUEST).json({ message: 'Pessoa palestrante não encontrada' });
  }
    return response.status(HTTP_OK_STATUS).json(talker);
});

app.post('/login', (_request, response) => response
  .status(HTTP_OK_STATUS).json({ token: token() }));

app.listen(PORT, () => {
  console.log('Online');
});
