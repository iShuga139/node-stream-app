'use strict'

// I preferred to use 'express' since I am more familiar with this framework
const express = require('express')
const bodyParser = require('body-parser')

/**
 * Create an express app with /event route
 *
 * @param   {Object} config  Configuration to create server
 * @returns {Object}         Express application
 */
function createApp (config) {
  const app = express()

  app.use(bodyParser.json({ limit: config.request.limit }))

  // I assumed this endpoint is needed due to the sample provided
  // uses the request module to send data and that is another
  // point that I used express (to mount routes).
  // Also, I though to use swagger to define the routes and show an UI
  // but this is a lightweight application that doesn´t need complexity
  app.post('/event', (req, res) => {
    const message = JSON.stringify(req.body)
    console.log(message)

    // I just defined this response because the errors will be handle by express
    // and it is a simple response because I assumed the response doesn´t provide
    // any value to the client
    return res
      .status(200)
      .send('OK')
  })

  // Set a timeout to avoid unnecessary delay for the requests
  app.timeout = 1900
  return app
}

module.exports = createApp
