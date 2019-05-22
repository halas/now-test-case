const send  = require('./send.js');

module.exports = (req, res) => {
  res.on('finish', send);
  res.end(`Hello from Node.js on Now 2.0!`);
  console.log('still here');
};
