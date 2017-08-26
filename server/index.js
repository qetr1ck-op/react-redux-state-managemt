const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults({
  static: './build'
})
const PORT = process.env.PORT || 8080

server.use(middleware)
server.use(router)
server.listen(PORT, () => {
  console.log(`listen on ${PORT}`)
})