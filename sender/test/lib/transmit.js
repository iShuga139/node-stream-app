'use strict'

const nock = require('nock')
const should = require('chai').should()
const transmit = require('../../transmit')

let serverCall

describe('Transmit', () => {
  context('successfully POST', () => {
    before(() => {
      serverCall = nock('http//localhost:8080')
        .post('/event')
        .reply(200, 'OK')
    })

    after(() => {
      nock.cleanAll()
    })

    it('should returns without error', (done) => {
      transmit({ 'deviceId': '123456' }, null, (err) => {
        if (err) return done(err)

        should.equal(err, undefined)
        serverCall.done()
        return done()
      })
    })
  })

  context('failed POST', () => {
    it('should returns an error when server is not available', (done) => {
      const errConnection = new Error('connect ECONNREFUSED 127.0.0.1:8080')
      errConnection.code = 'ECONNREFUSED'
      errConnection.errno = 'ECONNREFUSED'
      errConnection.syscall = 'connect'
      errConnection.address = '127.0.0.1'
      errConnection.port = 8080

      transmit({ 'deviceId': '12345' }, null, (err) => {
        err.should.be.an.instanceof(Error)
        err.code.should.be.equal(errConnection.code)
        err.errno.should.be.equal(errConnection.errno)
        err.syscall.should.be.equal(errConnection.syscall)
        err.address.should.be.equal(errConnection.address)
        err.port.should.be.equal(errConnection.port)

        return done()
      })
    })

    it('should return an error timeout when server delays a response', (done) => {
      const newError = new Error('ESOCKETTIMEOUT')
      newError.statusCode = 504
      newError.code = 'ESOCKETTIMEOUT'
      newError.connect = false

      serverCall = nock('http://localhost:8080')
        .post('/event')
        .replyWithError(newError)

      transmit({ 'deviceId': '12345' }, null, (err) => {
        err.should.be.an.instanceof(Error)
        err.code.should.be.equal(newError.code)
        err.connect.should.be.equal(newError.connect)

        serverCall.done()
        return done()
      })
    })
  })
})
