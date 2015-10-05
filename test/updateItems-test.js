'use strict'

var tap = require('tap')
var preparePoliticians = require('../lib/preparePoliticians')
var updateItems = require('../lib/updateItems')
var politicians = require('./data/politicians.json')
var committees = require('./data/politiciansCommittee.json')
var indexedObject = preparePoliticians({
  list: politicians,
  keyField: 'recno'
})
var updatedObject

tap.throws(
  function throwIfMissingOptions () {
    updateItems()
  },
  {message: 'Missing required input: options object'},
  'Options object must be supplied'
)

tap.throws(
  function throwIfMissingOptionsList () {
    updateItems({
      list: false
    })
  },
  {message: 'Missing required input: options.list'},
  'options.list is required input'
)

tap.throws(
  function throwIfOptionsListNotArray () {
    updateItems({
      list: 'feil type'
    })
  },
  {message: 'Wrong input type. options.list must be an array'},
  'options.list must must be an array'
)

tap.throws(
  function throwIfMissingOptionsKeyField () {
    updateItems({
      list: [1, 2, 3],
      keyField: false
    })
  },
  {message: 'Missing required input: options.keyField'},
  'options.keyField is required input'
)

tap.throws(
  function throwIfMissingOptionsIndexedObject () {
    updateItems({
      list: [1, 2, 3],
      keyField: 'daKey',
      indexedObject: false
    })
  },
  {message: 'Missing required input: options.indexedObject'},
  'options.indexedObject is required input'
)

updatedObject = updateItems({
  list: committees,
  keyField: 'recno',
  indexedObject: indexedObject
})

tap.ok(updatedObject[politicians[0]['recno']]['committees'], 'updatedObject contains committees array')
