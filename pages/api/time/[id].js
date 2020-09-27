import {models} from '../../../models'

export default (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
  }

  const {query: { id }} = req
  res.setHeader('Content-Type', 'application/json')
  const test = models.time.find(parseInt(id))
  res.status(200).json(test)
}