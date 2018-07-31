const jsonServer = require('json-server')
const cors       = require('cors')
const server     = jsonServer.create()

const isPersistent = process.argv[2] === 'persistent',
      fileName = './db.json',
			db     = isPersistent ? fileName : require(fileName),
			router = jsonServer.router(db);

const defaultMiddleware = jsonServer.defaults()

server.use(defaultMiddleware)
server.use(router)
server.use(cors())

server.listen(3000, () => {
	console.log('JSON Server is running at http://localhost:3000/')
	console.log("Mode: ", isPersistent ? 'Persistent' : 'In memory');
})