'use strict'

var mongojs = require('mongojs')
var config = require('../config')
var db = mongojs(config.mongo.db)

function cleanCollection(collection, callback) {
  collection = db.collection(collection)
  collection.drop(function(error) {
    if (error) {
      return callback(error)
    } else {
      return callback('Deleted collection: ' + collection)
    }
  })
}

module.exports = cleanCollection
