'use strict'

var tap = require('tap')
var nep = require('../index')

tap.test('Options object must be supplied', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options object'
  nep(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.storage must be supplied', function (test) {
  var options = {
    storage: false
  }
  var expectedErrorMessage = 'Missing required input: options.storage'
  nep(options, function errorIfMissingFiles (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.p360', function (test) {
  var options = {
    storage: {
      path: 'data'
    },
    p360: false
  }
  var expectedErrorMessage = 'Missing required input: options.p360'
  nep(options, function errorIfMissingStoragePath (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
