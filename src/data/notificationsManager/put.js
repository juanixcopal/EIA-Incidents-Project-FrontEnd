import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const updateExpirationDate = async ({ toggle, sockets, fetchAllExpiredNotificationsActive, notificationDate }) => {
  const { _getExpiredNotificationsActice } = fetchAllExpiredNotificationsActive

  await axios
    .put(`${process.env.REACT_APP_API_BASE}/v1/notificationsManager/update`, notificationDate, {
      headers: { service: 'update-expired-notification', token: localStorage.token }
    })
    .then(({ data }) => {
      alertMessage(data, toggle, _getExpiredNotificationsActice)
      sockets.notificationsSocket.emit('create_notification', data)
    })
}
