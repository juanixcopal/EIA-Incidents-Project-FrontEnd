import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const modifyItemView = async ({ selectedItems, toggle, _permissionPageDatosOsTicket }) => {
  await axios
    .put(`${process.env.REACT_APP_API_BASE}/v1/tickets/update`, selectedItems, {
      headers: { token: localStorage.token }
    })
    .then(({ data }) => {
      alertMessage(data, _permissionPageDatosOsTicket, toggle)
    })
}
