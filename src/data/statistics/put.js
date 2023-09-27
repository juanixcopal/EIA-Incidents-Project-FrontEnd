import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const modifyItemView = async ({ selectedItems, toggle, _permissionPageStatistics }) => {
  await axios
    .put(`${process.env.REACT_APP_API_BASE}/v1/statistics/update`, selectedItems, {
      headers: { token: localStorage.token }
    })
    .then(({ data }) => {
      alertMessage(data, _permissionPageStatistics, toggle)
    })
}
