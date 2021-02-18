// Express
import express from "express"
import api from "./routes/api"

const app = express()
const port = 8080

app.get("/", (req, res) => {
  const listRoutes = app._router.stack
  console.log(listRoutes)
  res.send(listRoutes)
})

app.use("/api/", api)

app.listen(port, () => {
  console.log(`Listening on port ${port} at http://localhost:8080`)
})
