import { updateUserData } from '../../data/users/put.js'
import { deleteUserData } from '../../data/users/delete.js'
import { createUserData } from '../../data/users/post.js'

export const useActions = ({ FetchAllUsers, toggle, data, dataModal, dataUser }) => {
  const updateDataUser = async e => {
    e.preventDefault()

    updateUserData({ FetchAllUsers, toggle, data })
  }

  const deleteUser = async e => {
    e.preventDefault()

    deleteUserData({ FetchAllUsers, toggle, dataModal })
  }

  const createUser = async e => {
    e.preventDefault()

    createUserData({ FetchAllUsers, toggle, dataUser })
  }

  return { updateDataUser, deleteUser, createUser }
}
