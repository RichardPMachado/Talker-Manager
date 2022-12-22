const { writeFile } = require('fs').promises;
const { join } = require('path');
const getAllSpeakers = require('./getAllSpeakers');

const deleteTalker = async (id) => {
  const allTalkers = await getAllSpeakers();
console.log(allTalkers);
  const newTalkers = allTalkers.filter((talker) => talker.id !== Number(id));

  await writeFile(join(__dirname, '../talker.json'), JSON.stringify(newTalkers, null, 2));

  return allTalkers;
};

module.exports = deleteTalker;