'use strict';


// const readFilePromise = util.promisify(fs.readFile);

// module.exports = exports = (file) => {
//   return readFilePromise(file)
//     .then(data => data.toString().trim() )
//     .catch( error => error );
// };


const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

/**
 * Wraps fs.readFile as a promise, processes the file as a JSON string, resolving with a JS object or null
 * Rejects with error on all fs errors as well as a malformed JSON string in the file itself
 * @param file - Full filesystem path to the file to read
 * @returns {Promise<T>}
 */

exports.read = (file) => readFile(file)
  .then(buffer => {
    return JSON.parse(buffer.toString());
  })
  .catch(error => {
    throw error;
  });


/**
 * Wraps fs.writeFile as a promise, processing the "text" as JSON when it presents as an object.
 * @param file - Filesystem Path to the file to write
 * @param text - Can be straight text or an Object
 */

exports.write = (file, text) => {
  let textString = JSON.stringify(text);
  let content = Buffer.from(textString);
  return writeFile(file, content)
    .then(result => result)
    .catrch( error => {
      throw error;
    });
};

