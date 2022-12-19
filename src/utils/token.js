const { randomBytes } = require('crypto'); // https://www.geeksforgeeks.org/node-js-crypto-randombytes-method/

const token = () => randomBytes(8).toString('hex'); 

module.exports = token;