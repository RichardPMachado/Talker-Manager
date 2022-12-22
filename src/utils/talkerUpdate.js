const { join } = require('path');
const { writeFile } = require('fs').promises;
const getAllSpeakers = require('./getAllSpeakers');

const talkerUpdate = async (id, newTalker) => {
  const allTalkers = await getAllSpeakers();
console.log(allTalkers);
  const talkerByIdex = allTalkers.findIndex((talker) => talker.id === Number(id));

  allTalkers[talkerByIdex] = { id: Number(id), ...newTalker };
  allTalkers.push({ id, newTalker });
  await writeFile(join(__dirname, '../talker.json'), JSON.stringify(allTalkers, null, 2));

  return allTalkers[talkerByIdex];
};

module.exports = talkerUpdate;