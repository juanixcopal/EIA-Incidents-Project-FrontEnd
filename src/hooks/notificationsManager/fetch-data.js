import { useEffect, useState } from 'react'

import { getAllExpiredNotificationsActive, getAllNotificationPriorities } from '../../data/notificationsManager/get.js'

export const useFetchAllExpiredNotificationsActive = () => {
  const [expiredNotifications, setExpiredNotifications] = useState([])
  const [loadingExpiredNotifications, setLoadingExpiredNotifications] = useState(false)

  const _getExpiredNotificationsActice = async () => {
    setLoadingExpiredNotifications(true)
    await getAllExpiredNotificationsActive()
      .then(({ data }) => {
        setExpiredNotifications(data)
      })
      .catch(({ response }) => {
        // ExecutionPermit({ response })
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error', response)
      })
    setLoadingExpiredNotifications(false)
  }

  useEffect(() => {
    _getExpiredNotificationsActice()
  }, [])

  return { expiredNotifications, loadingExpiredNotifications, _getExpiredNotificationsActice }
}

export const useFetchAllNotificationPriorities = () => {
  const [notificationPriority, setNotificationPriority] = useState([])
  const [loadingNotificationPriority, setLoadingNotificationPriority] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingNotificationPriority(true)
      await getAllNotificationPriorities()
        .then(({ data }) => {
          setNotificationPriority(data)
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            localStorage.clear()
            window.location.reload()
          }
          console.log('Error fetch-data states', response)
        })
      setLoadingNotificationPriority(false)
    })()
  }, [])
  return { notificationPriority, loadingNotificationPriority }
}
