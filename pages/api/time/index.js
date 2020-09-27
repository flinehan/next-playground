import {models} from '../../../models'

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  const test = models.time.get()
  res.end(JSON.stringify(test))
}