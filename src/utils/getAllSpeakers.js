const { readFile } = require('fs').promises;
const path = require('path');

const userPath = path.resolve(__dirname, '..', 'talker.json');

const getAllSpeakers = async () => {
  try {
    const response = await readFile(userPath, 'utf-8');
    const users = JSON.parse(response);
    return users;
  } catch (error) {
    console.log(`Error on read file: ${error.message}`);
  }
};

module.exports = getAllSpeakers;