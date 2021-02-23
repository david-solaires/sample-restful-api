// Express
import e from "express"
import api from "./routes/api"

const app = e()
const port = 8080

app.use("/api/", api)

function listRoutes(layer: any[]): any {
  const isRoute = ((element: any): boolean => {
    return (element?.route) || (element?.name === 'router')
  })

  const getStacks = ((element: any): any[] => {
    const stack = (element?.route?.stack || element?.handle?.stack)?.flat(Infinity)
    console.log(element)
    if(stack === undefined) {
      return element?.regexp?.source
    } else {
      return getStacks(stack)
    }
  })

  const routes: any = layer
    ?.filter(isRoute)
    ?.map(getStacks)

  
  console.log(routes)
  return routes;
}
app.get("/", (req, res) => {
  res.send(listRoutes(app._router.stack))
});



app.listen(port, () => {
  console.log(`Listening on port ${port} at http://localhost:8080`)
})
