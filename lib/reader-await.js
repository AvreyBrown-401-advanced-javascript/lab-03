/* eslint-disable no-useless-catch */
'use strict';

const fs = require('fs');

const util = require('util')


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

exports.read = async(path) => {
  try{
    const data = await readFile(path);
    const file = JSON.parse(data.toString());
    return file;
  } catch(error) {
    throw error;
  }
};

exports.write = async (path, data) => {
  try{
    let text = JSON.stringify(data) || data;
    await writeFile(path, text);
  } catch (error) {
    throw error;
  }
};

