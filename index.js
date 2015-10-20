'use strict'

function excecute (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options object'), null)
  }

  if (!options.storage) {
    return callback(new Error('Missing required input: options.storage'), null)
  }

  if (!options.p360) {
    return callback(new Error('Missing required input: options.p360'), null)
  }

  var run = require('./run.js')

  run(options, function (err, result) {
    if (err) {
      return callback(err, null)
    } else {
      var message = result.join('\n')
      return callback(null, message)
    }
  })
}

module.exports = excecute
