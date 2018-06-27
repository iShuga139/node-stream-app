'use strict'

const config = require('../mocks/configuration')
const request = require('supertest')
const sinon = require('sinon')
require('chai').should()

let consoleSpy

describe('Server', () => {
  context('/event', () => {
    beforeEach(() => {
      consoleSpy = sinon.spy(console, 'log')
    })

    afterEach(() => {
      consoleSpy.restore()
    })

    it('should return HTTP code 200', (done) => {
      const app = require('../../src/app')(config)

      request(app)
        .post('/event')
        .send({ test: 1 })
        .expect(200, 'OK')
        .end((err) => {
          if (err) {
            return done(err)
          }

          consoleSpy.calledOnce.should.be.true
          return done()
        })
    })

    it('should return an error HTTP code 413', (done) => {
      config.request.limit = '1b'
      const app = require('../../src/app')(config)

      request(app)
        .post('/event')
        .send({ test: 1, bigTest: true })
        .expect(413)
        .end((err) => {
          if (err) {
            return done(err)
          }

          consoleSpy.calledOnce.should.be.false
          return done()
        })
    })
  })
})
