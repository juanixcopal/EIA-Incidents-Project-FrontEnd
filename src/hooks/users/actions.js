import { updateUserData, updatePasswordUser } from '../../data/users/put.js'
import { deleteUserData } from '../../data/users/delete.js'
import { createUserData } from '../../data/users/post.js'

export const useActions = ({ FetchAllUsers, FetchAllSuperadmins, toggle, data, dataModal, dataUser, dataUpdatePassword }) => {
  const updateDataUser = async e => {
    e.preventDefault()

    updateUserData({ FetchAllUsers, FetchAllSuperadmins, toggle, data })
  }

  const deleteUser = async e => {
    e.preventDefault()

    deleteUserData({ FetchAllUsers, toggle, dataModal })
  }

  const createUser = async e => {
    e.preventDefault()

    createUserData({ FetchAllUsers, toggle, dataUser })
  }

  const updatePassword = async e => {
    e.preventDefault()

    updatePasswordUser({ toggle, dataModal, dataUpdatePassword })
  }

  return { updateDataUser, deleteUser, createUser, updatePassword }
}
