'use strict'

/**
 * Initialize an application
 * listening in a specific port
 */

const config = require('./config/defaults')
const app = require('./src/app')(config)

const http = require('http')

// Due to the server and client are separated, this app
// could initialized with HTTPS protocol too
// to provide more security with SSL certificates
// I assumed this runs on development/local environment yet
// therefore the HTTPS protocol was not implemented :p
const server = http.createServer(app)
server.listen(config.port)

process.on('SIGTERM', () => {
  server.close()
  process.exit(0)
})

// I did a refactor of this file to provide
// more structure to the project
