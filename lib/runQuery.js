'use strict'

var sql = require('mssql')
var config = require('../config')

function runQuery (query, callback) {
  var connection = new sql.Connection(config.p360, function (err) {
    if (err) {
      return callback(err, null)
    }
    var request = new sql.Request(connection)
    request.query(query, function (err, recordset) {
      if (err) {
        return callback(err, null)
      } else {
        return callback(null, recordset)
      }
    })
  })

  connection.on('error', function (err) {
    return callback(err, null)
  })
}

module.exports = runQuery
