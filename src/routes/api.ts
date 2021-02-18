import express from "express"

const get = express.Router()
get.get('/currentTime', (req, res) => {
    res.send(Date.now())
})

const api = express.Router()
api.use('/get/', get)

export default api