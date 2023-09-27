import io from 'socket.io-client'

const incidencesSocket = io(`${process.env.REACT_APP_API_BASE_SOCKET}/incidences`)
const notificationsSocket = io(`${process.env.REACT_APP_API_BASE_SOCKET}/notificationsManager`)

const sockets = {
  incidencesSocket,
  notificationsSocket
}
export default sockets
