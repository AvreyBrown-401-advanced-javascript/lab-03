'use strict';

/**
 * Simple Server
 * @module index
 */

const filePath = process.argv[2]; 

// const express = require('express');
const callback = require('./lib/reader-callback');
// const promise = require('./lib/reader-promise');
// const await = require('./lib/reader-await');
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


// app.get('/', (req, res) => res.send('Hello World!'));

// app.use('/docs', express.static('./docs'));




// app.listen(3000, () => console.log('listening on port 3000'));