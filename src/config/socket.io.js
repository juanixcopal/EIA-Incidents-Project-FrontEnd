import io from 'socket.io-client'

const URL_BASE = 'http://172.27.20.128:4000'
const incidencesSocket = io(`${URL_BASE}/incidences`)

const sockets = {
  incidencesSocket
}
export default sockets
