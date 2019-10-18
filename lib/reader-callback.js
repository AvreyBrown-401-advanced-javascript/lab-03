'use strict';

const fs = require('fs');

// create 2 file system methods, reader and writer
/**
* @param {string} filePath - the relative path of the file we want to read
* @param {function} callback - the relative path of the file we want to read
*/

exports.read = () => (filePath, callback) => {
  fs.readFile(filePath, (err, data) => {
    if(err) {
      callback(err);
    } else {
      try{
        callback(null, JSON.parse(data.toString()));
      } catch(e) {
        callback(e);
      }
    }
  });
};

/**
* @param {string} file - the location to write to
* @param {}
* @param {function} callback - the relative path of the file we want to read
*/

exports.write = (file, text,  callback) => {
  try{
    let bufferText = JSON.stringify(text);
    const buffer = Buffer.from(bufferText);
    fs.writeFile(file, buffer, callback);
  } catch(e) {
    callback(e);
  }
};





// const showFile = (err, data) => {
//   if(err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// };

// reader('./data/bad.txt', showFile);

// const reader = (file, callback) => {
//   fs.readFile(file, (err, data) => {
//     if(err) {
//       callback(err);
//     } else {
//       callback(null, data.toString());
//     }
//   });
// };

// const writer = (file, callback) => {
//   fs.readFile(file, (err, data) => {
//     if(err) {
//       callback(err);
//     } else {
//       callback();
//     }
//   });
// };



// module.exports = reader;
