'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    // cb(undefined, new Buffer('File Contents'));
    cb(undefined, Buffer.from('File Contents'));
  }
};