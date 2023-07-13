import { useState, useEffect } from 'react'
import { getAllUsers, getRoles, getAllSuperadmins } from '../../data/users/get.js'

export const useFetchAllUsers = () => {
  const [users, setUsers] = useState([])
  const [loadingUsers, setLoadingUsers] = useState(false)

  const _getAllUsers = async () => {
    setLoadingUsers(true)
    await getAllUsers()
      .then(({ data }) => {
        setUsers(data)
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error fetch-data all users', response)
      })
    setLoadingUsers(false)
  }

  useEffect(() => {
    _getAllUsers()
  }, [])

  return { users, loadingUsers, _getAllUsers }
}

export const useFetchRoles = () => {
  const [roles, setRoles] = useState([])
  const [loadingRoles, setLoadingRoles] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingRoles(true)
      await getRoles()
        .then(({ data }) => {
          setRoles(data)
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            localStorage.clear()
            window.location.reload()
          }
          console.log('Error fetch-data roles', response)
        })
      setLoadingRoles(false)
    })()
  }, [])
  return { roles, loadingRoles }
}

export const useFetchAllSuperadmins = () => {
  const [superadmins, setSuperadmins] = useState([])
  const [loadingSuperadmins, setLoadingSuperadmins] = useState(false)

  const _getAllSuperadmins = async () => {
    setLoadingSuperadmins(true)
    await getAllSuperadmins()
      .then(({ data }) => {
        setSuperadmins(data)
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error fetch-data all users', response)
      })
    setLoadingSuperadmins(false)
  }

  useEffect(() => {
    _getAllSuperadmins()
  }, [])

  return { superadmins, loadingSuperadmins, _getAllSuperadmins }
}
