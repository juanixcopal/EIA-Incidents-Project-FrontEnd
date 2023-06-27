import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const deleteUserData = async ({ FetchAllUsers, toggle, dataModal }) => {
  const { _getAllUsers } = FetchAllUsers

  const { id_user } = dataModal.params

  await axios
    .delete(`${process.env.REACT_APP_API_BASE}/v1/users/delete`, { headers: { service: 'delete-user', token: localStorage.token }, params: { id_user } })
    .then(({ data }) => {
      alertMessage(data, _getAllUsers, toggle)
    })
}
