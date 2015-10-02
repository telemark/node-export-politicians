'use strict'

var query = require('./dbQueries.js')
var dbRunQuery = require('./dbRunQuery.js')

function getPoliticians (options, callback) {
  dbRunQuery(query.allPoliticians, options, function (err, result) {
    if (err) {
      return callback(err, null)
    } else {
      return callback(null, result)
    }
  })
}

module.exports = getPoliticians
