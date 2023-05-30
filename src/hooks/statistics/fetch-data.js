import { useEffect, useState } from 'react'
import {
  getTypeIncidencesClosed,
  getTypeIncidencesClosedByRangeDate,
  getpermissionPageEstadistica,
  getClosedTicketsByWeek,
  getDataTicketByStaff,
  getTypeIncidencesClosedWeek
} from '../../data/statistics/get.js'

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

export const useFetchPermissionPageEstadisticas = () => {
  const [permissionPageEstadistica, setPermissionPageEstadistica] = useState([])
  const [loadingPermission, setLoadingPermission] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingPermission(true)
      await getpermissionPageEstadistica()
        .then(({ data }) => {
          setPermissionPageEstadistica(data)
        })
        .catch(({ response }) => {
          console.log('Error fetch-data permission page Datos OsTicket', response)
        })
      setLoadingPermission(false)
    })()
  }, [])
  return { permissionPageEstadistica, loadingPermission }
}

export const useFetchClosedTicketsByWeek = ({ weekly }) => {
  const [closedWeek, setClosedWeek] = useState([])

  useEffect(() => {
    ;(async () => {
      await getClosedTicketsByWeek({ weekly })
        .then(({ data }) => {
          setClosedWeek(data)
        })
        .catch(({ response }) => {
          console.log('Error', response)
        })
    })()
  }, [weekly])

  return { closedWeek }
}

export const useFetchDataTicketsByStaff = ({ dataModal, weekly }) => {
  const [dataTicketByStaff, setDataTicketByStaff] = useState([])

  const _getDataTicketByStaff = async () => {
    await getDataTicketByStaff({ dataModal, weekly })
      .then(({ data }) => {
        setDataTicketByStaff(data)
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  useEffect(() => {
    if (dataModal.params?.staff_id) {
      _getDataTicketByStaff()
    }
  }, [dataModal.params])

  return { dataTicketByStaff }
}

export const useFetchTypeIncidencesClosedWeek = () => {
  const [typeIncidencesClosedWeek, setTypeIncidencesClosedWeek] = useState([])

  const _getTypeIncidencesClosed = async () => {
    await getTypeIncidencesClosedWeek()
      .then(({ data }) => {
        setTypeIncidencesClosedWeek(data)
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
  return { typeIncidencesClosedWeek }
}
