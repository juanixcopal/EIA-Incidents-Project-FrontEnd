import { useState } from 'react'
import { useFetchAllUsers, useFetchRoles, useFetchAllSuperadmins } from './fetch-data'
import { defaultDataModal, defaultData, defaultDataUpdatePassword } from './default-data'
import { useActions } from './actions'
export const useFetchInitUsers = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [dataUser, setDataUser] = useState(defaultData)
  const [dataUpdatePassword, setDataUpdatePassword] = useState(defaultDataUpdatePassword)
  const [data, setData] = useState([])
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

  const handleInputChangeUpdatePassword = event => {
    setDataUpdatePassword({ ...dataUpdatePassword, [event.target.name]: event.target.value })
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  const handleTogglePasswordRepeatVisibility = () => {
    setShowPasswordRepeat(prevShowPassword => !prevShowPassword)
  }

  const FetchAllUsers = useFetchAllUsers()
  const FetchRoles = useFetchRoles()
  const FetchAllSuperadmins = useFetchAllSuperadmins()
  const Actions = useActions({ FetchAllUsers, FetchAllSuperadmins, toggle, dataModal, data, dataUser, dataUpdatePassword })

  return {
    FetchAllUsers,
    FetchRoles,
    FetchAllSuperadmins,
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
    showPasswordRepeat,
    dataUpdatePassword,
    handleInputChangeUpdatePassword
  }
}
