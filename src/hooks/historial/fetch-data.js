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
        .catch(({ response }) => {
          if (response.status === 401) {
            localStorage.clear()
            window.location.reload()
          }
          console.log('Error', response)
        })
    })()
  }, [])
  return { incidences }
}
