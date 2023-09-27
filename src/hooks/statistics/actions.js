import { modifyItemView } from '../../data/statistics/put.js'

export const useActions = ({ selectedItems, toggle, FetchPermissionPageEstadisticas }) => {
  const { _permissionPageStatistics } = FetchPermissionPageEstadisticas
  const modifyItemViewPage = async e => {
    e.preventDefault()
    modifyItemView({ selectedItems, toggle, _permissionPageStatistics })
  }

  return { modifyItemViewPage }
}
