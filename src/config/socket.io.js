import io from 'socket.io-client'

const URL_BASE = 'http://192.168.0.17:4000'
const incidencesSocket = io(`${URL_BASE}/incidences`)

const sockets = {
  incidencesSocket
}
export default sockets
