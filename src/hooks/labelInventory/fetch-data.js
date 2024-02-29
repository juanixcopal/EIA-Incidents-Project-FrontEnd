import { useState, useEffect } from 'react'

import { getIdentifierUEAA } from '../../data/inventoryLabel/get.js'

import ExecutionPermit from 'helpers/execution-permit.helper.js'

export const useFetchIdentifierUEAA = () => {
  const [identifierUEAA, setIdentifierUEAA] = useState([])
  const [LoadingIdentifierUEAA, setLoadingIdentifierUEAA] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingIdentifierUEAA(true)
      await getIdentifierUEAA()
        .then(({ data }) => {
          setIdentifierUEAA(data)
        })
        .catch(({ response }) => {
          ExecutionPermit({ response })
          console.log('Error fetch-data armarios', response)
        })
      setLoadingIdentifierUEAA(false)
    })()
  }, [])
  return { identifierUEAA, LoadingIdentifierUEAA }
}
