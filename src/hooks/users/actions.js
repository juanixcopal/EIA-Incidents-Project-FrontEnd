import { updateUserData } from '../../data/users/put.js'

export const useActions = ({ FetchAllUsers, toggle, data }) => {
  const updateDataUser = async e => {
    e.preventDefault()

    updateUserData({ FetchAllUsers, toggle, data })
  }

  return { updateDataUser }
}
