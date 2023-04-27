import io from 'socket.io-client'

const incidencesSocket = io(`${process.env.REACT_APP_API_BASE_SOCKET}/incidences`)

const sockets = {
  incidencesSocket
}
export default sockets
