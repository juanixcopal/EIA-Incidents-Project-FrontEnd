import { useEffect, useState } from 'react'

import { getAllNotificationsActive } from '../../data/notifications/get.js'

// import ExecutionPermit from 'helpers/execution-permit.helper.js'

export const useFetchAllNotificationsActive = ({ sockets }) => {
  const [notifications, setNotifications] = useState([])
  const [loadingNotifications, setLoadingNotifications] = useState(false)

  const _getNotificationsActice = async () => {
    setLoadingNotifications(true)
    await getAllNotificationsActive()
      .then(({ data }) => {
        setNotifications(data)
      })
      .catch(({ response }) => {
        // ExecutionPermit({ response })
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error', response)
      })
    setLoadingNotifications(false)
  }

  useEffect(() => {
    _getNotificationsActice()
  }, [])

  const receiveMessage = () => {
    _getNotificationsActice()
  }

  useEffect(() => {
    sockets.notificationsSocket.on('refresh_notifications', receiveMessage)

    return () => {
      sockets.notificationsSocket.on('refresh_notifications', receiveMessage)
    }
    // eslint-disable-next-line
  }, [])

  return { notifications, loadingNotifications, _getNotificationsActice }
}
