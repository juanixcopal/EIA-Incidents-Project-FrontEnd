import axios from 'axios'
import { alertMessage } from '../../hooks/common/toast-alert'

export const updateDataChromebook = async ({ updateData, FetchChromebooksByArmario, subToggle, FetchChromebooksActiveByCupboard }) => {
  const { _getChromebooksByArmario } = FetchChromebooksByArmario
  const { _getChromebooksActiveByCupboard } = FetchChromebooksActiveByCupboard

  await axios
    .put(`${process.env.REACT_APP_API_BASE}/v1/chromebooks/update`, updateData, { headers: { service: 'update-data-chromebook', token: localStorage.token } })
    .then(({ data }) => {
      alertMessage(data, subToggle, _getChromebooksByArmario, _getChromebooksActiveByCupboard)
    })
}
