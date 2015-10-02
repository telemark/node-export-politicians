'use strict'

function unwrapPoliticians (indexedObject) {
  var list = []
  var keys = Object.keys(indexedObject)

  keys.forEach(function (key) {
    var politician = indexedObject[key]
    politician.committeeIds = []
    if (politician.hasOwnProperty('committees')) {
      politician.committees.forEach(function (committee) {
        politician.committeeIds.push(committee.groupRecno)
      })
    }
    list.push(politician)
  })

  return list
}

module.exports = unwrapPoliticians
