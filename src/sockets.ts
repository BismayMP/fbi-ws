import { Server } from 'ws'
import { Socket } from 'dgram'
import { BodyType } from './types'
import { getPage, getWantedPerson } from './functions'

const webSocketServer = new Server({ noServer: true })

webSocketServer.on('connection', (ws: Socket) => {
  console.log('Client connected.')
  ws.on('message', (body: Buffer) => {
    const params = JSON.parse(body.toString('utf8'))
    if (params?.id) {
      getWantedPerson(params.id)
        .then((res) => {
          ws.send(JSON.stringify(res))
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      getPage(params as BodyType)
        .then((res) => {
          ws.send(JSON.stringify(res))
        })
        .catch((err) => {
          console.error(err)
        })
    }
  })
})

export default webSocketServer
