'use strict'

var config = {
  mongo: {
    db: 'tfk'
  },
  p360: {
    user: 'user', // Database username
    password: 'Password', // Database passord
    server: 'host.domain.no', // You can use 'localhost\\instance' to connect to named instance
    database: 'dbname', // Database name
    options: {
      encrypt: false // Use this if you're on Windows Azure
    }
  }
}

module.exports = config
