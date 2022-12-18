const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const userPath = path.resolve(__dirname, '..', 'talker.json');

const getAllSpeakers = async () => {
  const response = await readFile(userPath, 'utf-8');
  const users = JSON.parse(response);
  return users;
};

module.exports = {
  getAllSpeakers,
};