import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const postChromebooks = async ({ data, toggle, sockets }) => {
  await axios
    .post(`${process.env.REACT_APP_API_BASE}/v1/notificationsManager/manager`, data, {
      headers: { token: localStorage.token }
    })
    .then(({ data }) => {
      alertMessage(data, '', toggle)
      sockets.notificationsSocket.emit('create_notification', data)
    })
}
