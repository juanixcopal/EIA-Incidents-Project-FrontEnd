import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const updateUserData = async ({ FetchAllUsers, toggle, data }) => {
  const { _getAllUsers } = FetchAllUsers

  await axios
    .put(`${process.env.REACT_APP_API_BASE}/v1/users/update`, data, { headers: { service: 'update-rol-user', token: localStorage.token } })
    .then(({ data }) => {
      alertMessage(data, _getAllUsers, toggle)
    })
}
