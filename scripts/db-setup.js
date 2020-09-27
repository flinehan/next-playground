/**
 * I would never use a flat json "db" like this for production,
 * but a really basic test example like this is totally fine.
 */

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ locations: []})
  .write()

// Add a locations
db.get('locations')
  .push({ id: 1, hours: [{
    "start":"monday",
    "end":"thursday",
    "open":"7:00:00 EST",
    "close":"20:00:00 EST",
    "24Hours":false,
    "specialHour":false
  },
  {
    "start":"friday",
    "end":"saturday",
    "open":null,
    "close":null,
    "24Hours":true,
    "specialHour":false
  },
  {
    "start":"sunday",
    "end":null,
    "open":"6:00:00 EST",
    "close":"17:00:00 EST",
    "24Hours":false,
    "specialHour":false
  }]})
  .write()
