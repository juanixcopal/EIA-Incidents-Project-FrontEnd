import { useState } from 'react'
import { alertMessage } from '../common/toast-alert'
import axios from 'axios'

export const useActions = ({ FetchAllUsers, data, toggle, dataModal }) => {
  const [loadingOperation, setLoadingOperation] = useState(false)
  const { _getAllUsers } = FetchAllUsers

  const updateRoleUser = async e => {
    e.preventDefault()

    const { id_user } = dataModal.params

    const update_rol = {
      ...data,
      id_user
    }

    setLoadingOperation(true)
    await axios
      .put(`${process.env.REACT_APP_API_BASE}/v1/users/update`, update_rol, { headers: { service: 'update-rol-user', token: localStorage.token } })
      .then(({ data }) => {
        alertMessage(data, _getAllUsers, toggle)
      })
    setLoadingOperation(false)
  }

  return { updateRoleUser, loadingOperation }
}
