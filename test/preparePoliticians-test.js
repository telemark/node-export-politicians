'use strict'

var tap = require('tap')
var preparePoliticians = require('../lib/preparePoliticians')
var politicians = require('./data/politicians.json')
var indexedObject

tap.throws(
  function throwIfMissingOptions () {
    preparePoliticians()
  },
  {message: 'Missing required input: options object'},
  'Options object must be supplied'
)

tap.throws(
  function throwIfMissingOptionsList () {
    preparePoliticians({
      list: false
    })
  },
  {message: 'Missing required input: options.list'},
  'options.list is required input'
)

tap.throws(
  function throwIfOptionsListNotArray () {
    preparePoliticians({
      list: 'feil type'
    })
  },
  {message: 'Wrong input type. options.list must be an array'},
  'options.list must must be an array'
)

tap.throws(
  function throwIfMissingOptionsKeyField () {
    preparePoliticians({
      list: [1, 2, 3],
      keyField: false
    })
  },
  {message: 'Missing required input: options.keyField'},
  'options.keyField is required input'
)

indexedObject = preparePoliticians({
  list: politicians,
  keyField: 'recno'
})

tap.equal(politicians[0], indexedObject[politicians[0]['recno']], 'indexedObject contains item')
