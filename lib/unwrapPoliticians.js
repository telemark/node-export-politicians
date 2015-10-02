'use strict'

function unwrapPoliticians (indexedObject) {
  var list = []
  var keys = Object.keys(indexedObject)

  keys.forEach(function (key) {
    var politician = indexedObject[key]
    politician.textIndex = politician.name + ' '
    politician.committeeIds = []
    if (politician.hasOwnProperty('committees')) {
      politician.committees.forEach(function (committee) {
        politician.textIndex += committee.name + ' '
        politician.committeeIds.push(committee.groupRecno)
      })
    }
    list.push(politician)
  })

  console.log(keys.length)
  console.log(keys)
  return list
}

module.exports = unwrapPoliticians
