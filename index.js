const jsonServer        = require('json-server')
const server            = jsonServer.create()

const db = require('./db.json')
const router = jsonServer.router(db);

const defaultMiddleware = jsonServer.defaults()

server.use(router)

server.listen(3000, () => {
	console.log('JSON Server is running at http://localhost:3000/')
})