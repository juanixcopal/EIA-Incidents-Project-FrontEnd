import { useFetchAllNotificationsActive } from './fetch-data'
import sockets from '../../config/socket.io'

export const useFetchInitNotifications = () => {
  const fetchAllNotificationsActive = useFetchAllNotificationsActive({ sockets })

  return {
    fetchAllNotificationsActive
  }
}
