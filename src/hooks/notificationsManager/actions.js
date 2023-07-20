import { postChromebooks } from '../../data/notificationsManager/post.js'
import { updateExpirationDate } from '../../data/notificationsManager/put.js'

export const useActions = ({ data, toggle, sockets, fetchAllExpiredNotificationsActive, notificationDate }) => {
  const createNotification = async e => {
    e.preventDefault()
    postChromebooks({ data, toggle, sockets })
  }

  const expirationDateUpdate = async e => {
    e.preventDefault()
    updateExpirationDate({ fetchAllExpiredNotificationsActive, notificationDate, sockets, toggle })
  }
  return { createNotification, expirationDateUpdate }
}
