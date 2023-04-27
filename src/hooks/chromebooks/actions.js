import { postChromebooks } from '../../data/chromebooks/post.js'

export const useActions = ({ data, toggle }) => {
  const createChromebook = async e => {
    e.preventDefault()

    postChromebooks({ data, toggle })
  }

  return { createChromebook }
}
