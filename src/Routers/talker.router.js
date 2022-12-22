const { Router } = require('express');

const talkerRouter = Router();
const addTalker = require('../utils/addTalker');
const talkerUpdate = require('../utils/talkerUpdate');

const { authMiddleware, nameMiddleware, ageMiddleware,
  talkMiddleware, 
  rateMiddleware,
  watchedAtMiddleware,
} = require('../middleware/index');

const { getAllSpeakers, findSpeakerById } = require('../utils/server');
const { HTTP_OK_STATUS,
  HTTP_NOT_FOUND, HTTP_CREATED, HTTP_NO_CONSTENT,
} = require('../utils/statusCode');
const deleteTalker = require('../utils/deleteTalker');
const querySearch = require('../utils/querySearch');

talkerRouter.get('/talker', async (_request, response) => {
  const talkers = await getAllSpeakers(); 
  response.status(HTTP_OK_STATUS).json(talkers);
});

talkerRouter.get('/talker/search', authMiddleware, async (req, res) => {
  const { q } = req.query;
  const talkers = await getAllSpeakers();

  if (q === '') {
    return res.status(HTTP_OK_STATUS).json(talkers);
  }

  const talker = await querySearch(q);

  if (!talker) {
    return res.status(HTTP_OK_STATUS).send([]);
  }
  return res.status(HTTP_OK_STATUS).json(talker);
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
  return response.status(HTTP_CREATED).json(newTalker);
});

talkerRouter.put('/talker/:id', authMiddleware, nameMiddleware, ageMiddleware, talkMiddleware,
watchedAtMiddleware, rateMiddleware, async (request, response) => {
  const { id } = request.params;
  console.log(id);
  const newTalker = request.body;
  const talkerResponse = await talkerUpdate(id, newTalker);
  return response.status(HTTP_OK_STATUS).json(talkerResponse);
});

talkerRouter.delete('/talker/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  await deleteTalker(id);
  return res.status(HTTP_NO_CONSTENT).end();
});

module.exports = talkerRouter;
