import { useEffect, useState } from 'react'
import { getTypeIncidencesClosed, getTypeIncidencesClosedByRangeDate } from '../../data/statistics/get.js'

export const useFetchTypeIncidencesClosed = () => {
  const [typeIncidencesClosed, setTypeIncidencesClosed] = useState([])

  const _getTypeIncidencesClosed = async () => {
    await getTypeIncidencesClosed()
      .then(({ data }) => {
        setTypeIncidencesClosed(data[0])
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error', response)
      })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      _getTypeIncidencesClosed()
    }, 120000)
    _getTypeIncidencesClosed()
    return () => clearInterval(timer)
  }, [])
  return { typeIncidencesClosed }
}

export const useFetchTypeIncidencesClosedByRangeDate = ({ formattedStartDate, formattedEndDate }) => {
  const [typeIncidencesClosedByRangeDate, setTypeIncidencesClosedByRangeDate] = useState([])

  useEffect(() => {
    ;(async () => {
      await getTypeIncidencesClosedByRangeDate({ formattedStartDate, formattedEndDate })
        .then(({ data }) => {
          setTypeIncidencesClosedByRangeDate(data[0])
        })
        .catch(({ response }) => {
          console.log(response.status)
          if (response.status === 401) {
            localStorage.clear()
            window.location.reload()
          }
          console.log('Error', response)
        })
    })()
  }, [formattedStartDate, formattedEndDate])

  return { typeIncidencesClosedByRangeDate }
}
