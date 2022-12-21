const { Router } = require('express');

const talkerRouter = Router();

const { authMiddleware, nameMiddleware } = require('../middleware/index');

const { getAllSpeakers, findSpeakerById } = require('../utils/server');
const { HTTP_OK_STATUS,
  HTTP_NOT_FOUND,
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

talkerRouter.post('/talker', authMiddleware, nameMiddleware, async (request, response) => {
  const talkers = await getAllSpeakers(); 
  const { name, age, talk: { watchedAt, rate } } = request.body;
  const newTalker = {
    name,
    age,
    id: talkers[talkers.length - 1].id + 1,
    talk: {
      watchedAt,
      rate,
    },
  };
  talkers.push(newTalker);
  response.status(HTTP_OK_STATUS).json({ newTalker });
});

module.exports = talkerRouter;
