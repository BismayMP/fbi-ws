import app from './src/server'
import dotenv from 'dotenv'
import webSocketServer from './src/sockets'
import { Socket } from 'net'
import { Request } from 'express'
dotenv.config()
const PORT = process.env.PORT

const server = app.listen(PORT)
server.on('upgrade', (request: Request, socket: Socket, head) => {
  webSocketServer.handleUpgrade(request, socket, head, (socket) => {
    webSocketServer.emit('connection', socket, request)
  })
})

console.log(`Running 🚀 Server on port ${PORT}`)
