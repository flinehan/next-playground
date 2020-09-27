import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

// yep we are going to pause the server when the sync runs - yes this is bad
const adapt = new FileSync('db.json')
const db = low(adapt)

export default class TimeModel {

  constructor(database = db, adapter = adapt){
    this.db = db
    this.adapter = adapter
    this.key = 'locations'
  }

  get(){
    return this.db.get(this.key)
  }

  find(id){
    return this.get()
    .find({id})
    .value()
  }

  update(data){
    console.log(data)
    return 
  }
}
