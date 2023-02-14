import { useEffect, useState } from 'react'
import { getIncidencesByUser } from '../../data/historial/get.js'

export const useFetchIncidencesByUser = () => {
  const [incidences, setIncidences] = useState([])

  useEffect(() => {
    ;(async () => {
      await getIncidencesByUser()
        .then(({ data }) => {
          setIncidences(data)
        })
        .catch(error => {
          console.log('ERROR', error)
        })
    })()
  }, [])
  return { incidences }
}
