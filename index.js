'use strict';

/**
 * Simple Server
 * @module index
 */

const filePath = process.argv[2]; 

// const express = require('express');
const callback = require('./lib/reader-callback');
const promise = require('./lib/reader-promise');
const useAwait = require('./lib/reader-await');
// const app = express();


callback.read(filePath, (err, data) => {
  if(err) {
    console.error(err);
  } else{
    data.lastName = 'changed from a callback';
    callback.write(filePath, data, (err) => {
      if(err) {
        console.error(err);
      } else {
        callback.read(filePath, (err, newData) => {
          console.log(newData);
        });
      }
    });
    console.log(data);
  }
});

async function useAwaitFunction() {
  const content = await useAwait.read(filePath);
  content.lastName = 'changed with await';
  await useAwait.write(filePath, content);;
  const newContent = await useAwait.read(filePath);
  return newContent;
}

useAwaitFunction().then((fileData) => console.log(fileData));
