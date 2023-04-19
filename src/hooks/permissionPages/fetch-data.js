import { useState, useEffect } from 'react'
import { getpermissionPageDatosOsTicket } from '../../data/permissionPages/get.js'

export const useFetchPermissionPageDatosOsTicket = () => {
  const [permissionPageOsTicket, setPermissionPageOsTicket] = useState([])
  const [loadingPermission, setLoadingPermission] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingPermission(true)
      await getpermissionPageDatosOsTicket()
        .then(({ data }) => {
          setPermissionPageOsTicket(data)
        })
        .catch(({ response }) => {
          // if (response.status === 401) {
          //   localStorage.clear()
          //   window.location.reload()
          // }
          console.log('Error fetch-data permission page Datos OsTicket', response)
        })
      setLoadingPermission(false)
    })()
  }, [])
  return { permissionPageOsTicket, loadingPermission }
}
