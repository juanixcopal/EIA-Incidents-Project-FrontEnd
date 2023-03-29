import { useState } from 'react'
import { useFetchAllUsers, useFetchRoles } from './fetch-data'
import { defaultData, defaultDataModal } from './default-data'
import { useActions } from './actions'
export const useFetchInitUsers = () => {
  const [data, setData] = useState(defaultData)
  const [dataModal, setDataModal] = useState(defaultDataModal)

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

  const FetchAllUsers = useFetchAllUsers()
  const FetchRoles = useFetchRoles()
  const Actions = useActions({ FetchAllUsers, data, toggle, dataModal })

  return {
    FetchAllUsers,
    FetchRoles,
    data,
    handleInputChange,
    dataModal,
    toggle,
    Actions
  }
}
