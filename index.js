'use strict'

var options = require('./options.js')
var run = require('./run.js')

run(options, function (err, result) {
  if (err) {
    console.log(err)
    process.exit(1)
  } else {
    var message = result.join('\n')
    console.log(message)
    process.exit(0)
  }
})
