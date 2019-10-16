'use strict';


/**
 * Simple Server
 * @module index
 */



const express = require('express');
const app = express();


app.get('/', (req, res) => res.send('Hello World!'));

app.use('/docs', express.static('./docs'));




app.listen(3000, () => console.log('Example app listening on port 3000!'));