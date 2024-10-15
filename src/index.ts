import { Server } from './server'

const PORT = parseInt(process.env.PORT ?? '3000', 10)
const server = new Server(PORT)
server.start()
