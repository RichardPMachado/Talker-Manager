const { Router } = require('express');

const talkerRouter = Router();
const addTalker = require('../utils/addTalker');

const { authMiddleware, nameMiddleware, ageMiddleware,
  talkMiddleware, 
  rateMiddleware,
  watchedAtMiddleware,
} = require('../middleware/index');

const { getAllSpeakers, findSpeakerById } = require('../utils/server');
const { HTTP_OK_STATUS,
  HTTP_NOT_FOUND, HTTP_CREATED,
   } = require('../utils/statusCode');

talkerRouter.get('/talker', async (_request, response) => {
  const talkers = await getAllSpeakers(); 
  response.status(HTTP_OK_STATUS).json(talkers);
});

talkerRouter.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await getAllSpeakers(); 
  const talker = await findSpeakerById(talkers, id);
  if (!talker) {
    return response.status(HTTP_NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
  }
    return response.status(HTTP_OK_STATUS).json(talker);
});
  
talkerRouter.post('/talker', authMiddleware, nameMiddleware, ageMiddleware, talkMiddleware,
rateMiddleware, watchedAtMiddleware, async (request, response) => {
  const newTalker = await addTalker(request.body);
  console.log(newTalker);
  return response.status(HTTP_CREATED).json(newTalker);
});

module.exports = talkerRouter;
