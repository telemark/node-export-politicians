'use strict'

var sql = require('mssql')
var config = require('../config')

function runQuery (query, callback) {
  var connection = new sql.Connection(config.p360, function (err) {
    var request = new sql.Request(connection)
    request.query(query, function (err, recordset) {
      if (err) {
        callback(err, null)
      } else {
        callback(null, recordset)
      }
    })
  })

  connection.on('error', function (err) {
      callback(err, null)
  })
}

module.exports = runQuery
