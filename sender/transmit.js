'use strict'

const config = require('./config/defaults')
const request = require('request')

/*
* This function will be called for each event.
* (eg: for each sensor reading)
*/
module.exports = (eventMsg, encoding, callback) => {
  const options = {
    uri: `http://localhost:${config.port}/event`,
    method: 'POST',
    body: eventMsg,
    json: true
  }

  // Due the eventMsg is a JSON (lightweight structure) and
  // the chunk is for each line in the provided file the request is not
  // a heavy call in the network because every call is processed in serial
  //
  // I assumed that the client doesn´t expect to do anything with the response,
  // just send the data; that's why I don´t handle the response and/or any validation
  //
  // Note: Make the calls in parallel is something that could be improved or
  // make the calls in serial mode but compress the whole file before
  //
  // I did the refactor in the next line just to be idiomatic
  request(options, (err, res, body) => {
    if (err) return callback(err)

    return callback()
  })
}

// I would like to move this file to the `lib` folder,
// for the project to be a little bit more structured
// but I can't modify the index.js file
