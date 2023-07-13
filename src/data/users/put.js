import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const updateUserData = async ({ FetchAllUsers, FetchAllSuperadmins, toggle, data }) => {
  const { _getAllUsers } = FetchAllUsers
  const { _getAllSuperadmins } = FetchAllSuperadmins

  await axios
    .put(`${process.env.REACT_APP_API_BASE}/v1/users/update`, data, { headers: { service: 'update-user-data', token: localStorage.token } })
    .then(({ data }) => {
      alertMessage(data, toggle, _getAllUsers, _getAllSuperadmins)
    })
}

export const updatePasswordUser = async ({ toggle, dataModal, dataUpdatePassword }) => {
  const { id_user } = dataModal.params

  const params = {
    password: dataUpdatePassword.password,
    password_repeat: dataUpdatePassword.password_repeat,
    id_user: id_user
  }

  await axios
    .put(`${process.env.REACT_APP_API_BASE}/v1/users/update`, params, { headers: { service: 'update-password-user', token: localStorage.token } })
    .then(({ data }) => {
      alertMessage(data, toggle)
    })
}
