'use strict'

/**
 * Initialize an application
 * listening in a specific port
 */

const config = require('./config/defaults')
const app = require('./src/app')(config)

const http = require('http')

const server = http.createServer(app)
server.listen(config.port)

process.on('SIGTERM', () => {
  server.close()
  process.exit(0)
})
