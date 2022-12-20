const { Router } = require('express');

const talkerRouter = Router();

const { getAllSpeakers, findSpeakerById } = require('../utils/server');
const { HTTP_OK_STATUS,
  HTTP_BAD_REQUEST,
   } = require('../utils/statusCode');

talkerRouter.get('/talker', async (_request, response) => {
  const talkers = await getAllSpeakers(); 
  response.status(HTTP_OK_STATUS).json(talkers);
});

talkerRouter.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await getAllSpeakers(); 
  const talker = await findSpeakerById(talkers, id);
  console.log(await talker);
  if (!talker) {
    return response.status(HTTP_BAD_REQUEST).json({ message: 'Pessoa palestrante não encontrada' });
  }
    return response.status(HTTP_OK_STATUS).json(talker);
});

module.exports = talkerRouter;
