'use strict';

const fs = require('fs');

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
