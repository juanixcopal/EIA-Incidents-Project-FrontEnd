import { useState } from 'react'

export const useActions = () => {
  const [loadingOperation, setLoadingOperation] = useState(false)

  const changeState = async e => {
    e.preventDefault()
    setLoadingOperation(true)
    setLoadingOperation(false)
  }

  return { loadingOperation, changeState }
}
