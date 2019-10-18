'use strict';


jest.mock('fs');

const fileReader  = require('../lib/reader-callback');

describe('testing file reader module', () => {
  it('throws an error when a bad file is given', (done) => {
    let file = `${__dirname}../data/bad.txt`;
    fileReader(file, (err, data) => {
      expect(err).toBeDefined();
      expect(data).not.toBeDefined();
      expect(err).toEqual('Invalid File');
      done();
    });
  });
});

// describe('writes to a file using a callback', () => {
//   fileEdit.write('test.json', (test), (err, data))
// })


