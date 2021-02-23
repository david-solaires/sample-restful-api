import express, { IRoute } from "express"

const get = express.Router()
get.get('/currentTime', (req, res) => {
  res.send(`${new Date()}`)
})

const api = express.Router()
api.use('/get/', get)

export default api