import { useState } from 'react'
import { useFetchAllUsers, useFetchRoles } from './fetch-data'
import { defaultDataModal } from './default-data'
import { useActions } from './actions'
export const useFetchInitUsers = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [data, setData] = useState([])

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

  const prueba = formData => {
    setData(formData)
  }

  const FetchAllUsers = useFetchAllUsers()
  const FetchRoles = useFetchRoles()
  const Actions = useActions({ FetchAllUsers, toggle, dataModal, data })

  return {
    FetchAllUsers,
    FetchRoles,
    dataModal,
    toggle,
    Actions,
    onClose,
    prueba,
    setData
  }
}
