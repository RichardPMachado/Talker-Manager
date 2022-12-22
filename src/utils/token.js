const { randomBytes } = require('crypto'); // https://www.geeksforgeeks.org/node-js-crypto-randombytes-method/

const tokenGenerator = () => randomBytes(8).toString('hex'); 

module.exports = tokenGenerator;