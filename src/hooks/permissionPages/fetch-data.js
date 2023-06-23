import { useState, useEffect } from 'react'
import { getpermissionPageDatosOsTicket, getpermissionPageEstadistica } from '../../data/permissionPages/get.js'

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
          console.log('Error fetch-data permission page Datos OsTicket', response)
        })
      setLoadingPermission(false)
    })()
  }, [])

  // const _permissionPageOsTicket = async () => {
  //   setLoadingPermission(true)
  //   await getpermissionPageDatosOsTicket()
  //     .then(({ data }) => {
  //       setPermissionPageOsTicket(data)
  //     })
  //     .catch(({ response }) => {
  //       if (response.status === 401) {
  //         localStorage.clear()
  //         window.location.reload()
  //       }
  //       console.log('Error', response)
  //     })
  //   setLoadingPermission(false)
  // }

  // useEffect(() => {
  //   _permissionPageOsTicket()
  // }, [])

  return { permissionPageOsTicket, loadingPermission }
}

export const useFetchPermissionPageEstadisticas = () => {
  const [permissionPageEstadistica, setPermissionPageEstadistica] = useState([])
  const [loadingPermission, setLoadingPermission] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingPermission(true)
      await getpermissionPageEstadistica()
        .then(({ data }) => {
          setPermissionPageEstadistica(data)
        })
        .catch(({ response }) => {
          console.log('Error fetch-data permission page Datos OsTicket', response)
        })
      setLoadingPermission(false)
    })()
  }, [])
  return { permissionPageEstadistica, loadingPermission }
}
