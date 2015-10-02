'use strict'

var options = {
  mongo: {
    db: 'tfk'
  },
  storage: {
    path: 'data'
  },
  p360: {
    user: 'user', // Database username
    password: 'pass', // Database passord
    server: 'host', // You can use 'localhost\\instan$
    database: 'TEST360', // Database name
    options: {
      encrypt: false // Use this if you're on Windows Azure
    }
  }
}

module.exports = options
