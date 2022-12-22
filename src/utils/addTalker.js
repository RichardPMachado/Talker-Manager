const { join } = require('path');
const { writeFile } = require('fs').promises;
const getAllSpeakers = require('./getAllSpeakers');

const addTalker = async (request) => {
  const talkers = await getAllSpeakers();
  const talker = { ...request };
  const newTalker = {
    ...talker,
    id: talkers[talkers.length - 1].id + 1, 
  };
  talkers.push(newTalker);
  await writeFile(join(__dirname, '../talker.json'), JSON.stringify(talkers, null, 2));
  return newTalker;
};

module.exports = addTalker;