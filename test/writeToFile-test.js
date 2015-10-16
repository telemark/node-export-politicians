'use strict'

var tap = require('tap')
var writeToFile = require('../lib/writeToFile')

tap.test('Options object must be supplied', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options object'
  writeToFile(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.files must be supplied', function (test) {
  var options = {
    files: false
  }
  var expectedErrorMessage = 'Missing required input: options.files'
  writeToFile(options, function errorIfMissingFiles (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.files must be an array', function (test) {
  var options = {
    files: 'This is not an array'
  }
  var expectedErrorMessage = 'Wrong input type: options.files must be an array'
  writeToFile(options, function errorIfFilesNotAnArray (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.storagePath must be supplied', function (test) {
  var options = {
    files: [1, 2, 3, 4]
  }
  var expectedErrorMessage = 'Missing required input: options.storagePath'
  writeToFile(options, function errorIfMissingStoragePath (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
