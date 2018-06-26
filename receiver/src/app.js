'use strict'

const express = require('express')
const bodyParser = require('body-parser')

/**
 * Create an express app with /event route
 *
 * @param   {Object} config  Configuration to create server
 * @returns {Object}         HTTP Server
 */
function createApp (config) {
  const app = express()

  app.use(bodyParser.json({ limit: config.request.limit }))
  app.post('/event', (req, res) => {
    const message = JSON.stringify(req.body)
    console.log(message)

    return res
      .status(200)
      .send('OK')
  })

  return app
}

module.exports = createApp
