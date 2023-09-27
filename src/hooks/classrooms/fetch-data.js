import { useState, useEffect } from 'react'
import { getFloors } from '../../data/classrooms/get.js'
import ExecutionPermit from 'helpers/execution-permit.helper.js'

export const useFetchFloors = () => {
  const [floors, setFloors] = useState([])
  const [loadingFloors, setLoadingFloors] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingFloors(true)
      await getFloors()
        .then(({ data }) => {
          setFloors(data)
        })
        .catch(({ response }) => {
          ExecutionPermit({ response })
          console.log('Error fetch-data armarios', response)
        })
      setLoadingFloors(false)
    })()
  }, [])
  return { floors, loadingFloors }
}
