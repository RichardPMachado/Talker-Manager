const findSpeakerById = (talkers, id) => {
  const talker = talkers.find((tlkr) => tlkr.id === Number(id));
  return talker;
};

module.exports = findSpeakerById;