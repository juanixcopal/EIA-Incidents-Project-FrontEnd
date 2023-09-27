import { modifyItemView } from '../../data/osTicketData/put.js'

export const useActions = ({ selectedItems, toggle, FetchPermissionPageDatosOsTicket }) => {
  const { _permissionPageDatosOsTicket } = FetchPermissionPageDatosOsTicket

  const modifyItemViewPage = async e => {
    e.preventDefault()
    modifyItemView({ selectedItems, _permissionPageDatosOsTicket, toggle })
  }

  return { modifyItemViewPage }
}
