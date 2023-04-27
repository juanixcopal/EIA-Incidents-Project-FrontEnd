import { useEffect, useState } from 'react'
import { getIncidencesByUser } from '../../data/historial/get.js'

export const useFetchIncidencesByUser = ({ formattedDate }) => {
  const [incidences, setIncidences] = useState([])
  const [loadingIncidences, setLoadingIncidences] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingIncidences(true)
      await getIncidencesByUser({ formattedDate })
        .then(({ data }) => {
          setIncidences(data)
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            localStorage.clear()
            window.location.reload()
          }
          console.log('Error', response)
        })
      setLoadingIncidences(false)
    })()
  }, [formattedDate])
  return { incidences, loadingIncidences }
}
