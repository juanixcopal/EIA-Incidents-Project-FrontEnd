import { postChromebooks } from '../../data/chromebooks/post.js'
import { updateDataChromebook } from '../../data/chromebooks/put.js'

export const useActions = ({ data, toggle, updateData, FetchChromebooksByArmario, subToggle, FetchChromebooksActiveByCupboard }) => {
  const createChromebook = async e => {
    e.preventDefault()

    postChromebooks({ data, toggle })
  }

  const updateDataChromebookAction = async e => {
    e.preventDefault()
    updateDataChromebook({ updateData, FetchChromebooksByArmario, subToggle, FetchChromebooksActiveByCupboard })
  }

  return { createChromebook, updateDataChromebookAction }
}
