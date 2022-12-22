const getAllSpeakers = require('./getAllSpeakers');

const querySearch = async (query) => {
  const allTalkers = await getAllSpeakers();
  const searchTalker = await allTalkers.filter((talker) => talker.name.includes(query));
  return searchTalker;
};

module.exports = querySearch;