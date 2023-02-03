import io from 'socket.io-client'

const URL_BASE = 'http://localhost:4000'
const socket = io(URL_BASE)

export default socket
