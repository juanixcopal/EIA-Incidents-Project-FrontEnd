import { useState } from 'react'
import { defaultData, defaultDataModal } from './default-data'
import { useFetchAllExpiredNotificationsActive, useFetchAllNotificationPriorities } from './fetch-data'
import { useActions } from './actions.js'
import sockets from '../../config/socket.io'

export const useFetchInitNotificationsManager = () => {
  const [data, setData] = useState(defaultData)
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [notificationDate, setNotificationDate] = useState([])

  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const day = String(currentDate.getDate()).padStart(2, '0')
  const formattedDate = `${year}-${month}-${day}T00:00`

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const toggle = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const onClose = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const handleChangeDate = formData => {
    setNotificationDate(formData)
  }

  const fetchAllExpiredNotificationsActive = useFetchAllExpiredNotificationsActive()
  const fetchAllNotificationPriorities = useFetchAllNotificationPriorities()
  const Actions = useActions({ data, toggle, sockets, fetchAllExpiredNotificationsActive, notificationDate })

  return {
    fetchAllExpiredNotificationsActive,
    fetchAllNotificationPriorities,
    handleInputChange,
    toggle,
    onClose,
    dataModal,
    Actions,
    formattedDate,
    handleChangeDate,
    notificationDate
  }
}
