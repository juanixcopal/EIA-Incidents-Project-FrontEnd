import { useState } from 'react'
import { useFetchAllUsers, useFetchRoles } from './fetch-data'
import { defaultDataModal, defaultData } from './default-data'
import { useActions } from './actions'
export const useFetchInitUsers = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [data, setData] = useState([])
  const [dataUser, setDataUser] = useState(defaultData)
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false)

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

  const handleChangeData = formData => {
    setData(formData)
  }

  const handleInputChange = event => {
    setDataUser({ ...dataUser, [event.target.name]: event.target.value })
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  const handleTogglePasswordRepeatVisibility = () => {
    setShowPasswordRepeat(prevShowPassword => !prevShowPassword)
  }

  const FetchAllUsers = useFetchAllUsers()
  const FetchRoles = useFetchRoles()
  const Actions = useActions({ FetchAllUsers, toggle, dataModal, data, dataUser })

  return {
    FetchAllUsers,
    FetchRoles,
    dataModal,
    toggle,
    Actions,
    onClose,
    handleChangeData,
    setData,
    handleInputChange,
    handleTogglePasswordVisibility,
    showPassword,
    handleTogglePasswordRepeatVisibility,
    showPasswordRepeat
  }
}
