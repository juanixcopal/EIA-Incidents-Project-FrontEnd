import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const createUserData = async ({ FetchAllUsers, toggle, dataUser }) => {
  const { _getAllUsers } = FetchAllUsers

  await axios
    .post(`${process.env.REACT_APP_API_BASE}/v1/users/manager`, dataUser, { headers: { service: 'create-user', token: localStorage.token } })
    .then(({ data }) => {
      alertMessage(data, _getAllUsers, toggle)
    })
}
