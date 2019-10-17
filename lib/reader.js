'use strict';

const fs = require('fs');
const util = require('util');

const reader = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if(err) {
      callback(err);
    } else {
      callback(null, data.toString());
    }
  });
};

const readFilePromise = util.promisify(fs.readFile);
// const readerPromise = (file) => {
//   return readFilePromise(file)
//     .then(data => data.toString())
//     .catch(error => error);
// };

module.exports = exports = (file) => {
  return readFilePromise(file)
    .then(data => data.toString().trim() )
    .catch( error => error );
};

module.exports = reader;
// module.exports = readerPromise;
