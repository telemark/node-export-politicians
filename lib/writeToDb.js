'use strict'

var mongojs = require('mongojs')
var config = require('../config')
var db = mongojs(config.mongo.db)

function isEmptyObject (obj) {
  return !Object.keys(obj).length
}

function dbInsert (content, collection, callback) {
  if (!isEmptyObject(content)) {
    collection = db.collection(collection)
    collection.insert(content, function (error, data) {
      if (error) {
        return callback(error, null)
      } else {
        return callback(null, 'Inserted document to collection: ' + collection)
      }
    })
  }
}

module.exports = dbInsert
