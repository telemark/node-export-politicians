'use strict'

var query = require('./dbQueries.js')
var dbRunQuery = require('./dbRunQuery.js')

function getCommittees (politicians, opts, callback) {
  var qry
  var committees = []
  var elements = Object.keys(politicians).length
  var i = 0

  politicians.forEach(function (item) {
    qry = query.politicianCommittees.replace(/@PARAM/g, item.recno)
    dbRunQuery(qry, opts, function (err, result) {
      i++
      if (err) {
        return callback(err, null)
      } else {
        committees.push(result)
        if (i === elements) {
          return callback(null, committees)
        }
      }
    })
  })
}

module.exports = getCommittees
