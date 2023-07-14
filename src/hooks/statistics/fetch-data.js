import { useEffect, useState } from 'react'
import {
  getTypeIncidencesClosed,
  getTypeIncidencesClosedByRangeDate,
  getpermissionPageEstadistica,
  getClosedTicketsCurrentWeek,
  getDataTicketByStaff,
  getTypeIncidencesClosedWeek
} from '../../data/statistics/get.js'

import ExecutionPermit from 'helpers/execution-permit.helper.js'

export const useFetchTypeIncidencesClosed = () => {
  const [typeIncidencesClosed, setTypeIncidencesClosed] = useState([])
  const [loadingTypeIncidencesClosed, setLoadingTypeIncidencesClosed] = useState(false)

  const _getTypeIncidencesClosed = async () => {
    setLoadingTypeIncidencesClosed(true)
    await getTypeIncidencesClosed()
      .then(({ data }) => {
        setTypeIncidencesClosed(data[0])
      })
      .catch(({ response }) => {
        ExecutionPermit({ response })
        console.log('Error', response)
      })
    setLoadingTypeIncidencesClosed(false)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      _getTypeIncidencesClosed()
    }, 120000)
    _getTypeIncidencesClosed()
    return () => clearInterval(timer)
  }, [])
  return { typeIncidencesClosed, loadingTypeIncidencesClosed }
}

export const useFetchTypeIncidencesClosedByRangeDate = ({ formattedStartDate, formattedEndDate }) => {
  const [typeIncidencesClosedByRangeDate, setTypeIncidencesClosedByRangeDate] = useState([])
  const [loadingTypeIncidencesClosedByRangeDate, setLoadingTypeIncidencesClosedByRangeDate] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingTypeIncidencesClosedByRangeDate(true)
      await getTypeIncidencesClosedByRangeDate({ formattedStartDate, formattedEndDate })
        .then(({ data }) => {
          setTypeIncidencesClosedByRangeDate(data[0])
        })
        .catch(({ response }) => {
          console.log(response.status)
          ExecutionPermit({ response })
          console.log('Error', response)
        })
      setLoadingTypeIncidencesClosedByRangeDate(false)
    })()
    // eslint-disable-next-line
  }, [formattedStartDate && formattedEndDate])

  return { typeIncidencesClosedByRangeDate, loadingTypeIncidencesClosedByRangeDate }
}

export const useFetchPermissionPageEstadisticas = () => {
  const [permissionPageEstadistica, setPermissionPageEstadistica] = useState([])
  const [loadingPermission, setLoadingPermission] = useState(false)

  const _permissionPageStatistics = async () => {
    setLoadingPermission(true)
    await getpermissionPageEstadistica()
      .then(({ data }) => {
        setPermissionPageEstadistica(data)
      })
      .catch(({ response }) => {
        ExecutionPermit({ response })
        console.log('Error useFetchPermissionPageEstadisticas', response)
      })
    setLoadingPermission(false)
  }

  useEffect(() => {
    _permissionPageStatistics()
  }, [])

  return { permissionPageEstadistica, loadingPermission, _permissionPageStatistics }
}

export const useFetchClosedTicketsCurrentWeek = ({ weekly }) => {
  const [closedCurrentWeek, setClosedCurrentWeek] = useState([])
  const [loadingClosedCurrentWeek, setLoadingClosedCurrentWeek] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingClosedCurrentWeek(true)
      await getClosedTicketsCurrentWeek({ weekly })
        .then(({ data }) => {
          setClosedCurrentWeek(data)
        })
        .catch(({ response }) => {
          ExecutionPermit({ response })
          console.log('Error useFetchClosedTicketsByWeek', response)
        })
      setLoadingClosedCurrentWeek(false)
    })()
  }, [weekly])

  return { closedCurrentWeek, loadingClosedCurrentWeek }
}

export const useFetchDataTicketsByStaff = ({ dataModal, weekly }) => {
  const [dataTicketByStaff, setDataTicketByStaff] = useState([])
  const [loadingDataTicketByStaff, setLoadingDataTicketByStaff] = useState(false)

  const _getDataTicketByStaff = async () => {
    setLoadingDataTicketByStaff(true)
    await getDataTicketByStaff({ dataModal, weekly })
      .then(({ data }) => {
        setDataTicketByStaff(data)
      })
      .catch(({ response }) => {
        ExecutionPermit({ response })
        console.log('Error useFetchDataTicketsByStaff', response)
      })
    setLoadingDataTicketByStaff(false)
  }

  useEffect(() => {
    if (dataModal.params?.staff_id) {
      _getDataTicketByStaff()
    }
    // eslint-disable-next-line
  }, [dataModal.params])

  return { dataTicketByStaff, loadingDataTicketByStaff }
}

export const useFetchTypeIncidencesClosedWeek = () => {
  const [typeIncidencesClosedWeek, setTypeIncidencesClosedWeek] = useState([])
  const [loadingTypeIncidencesClosedWeek, setLoadingTypeIncidencesClosedWeek] = useState(false)

  const _getTypeIncidencesClosed = async () => {
    setLoadingTypeIncidencesClosedWeek(true)
    await getTypeIncidencesClosedWeek()
      .then(({ data }) => {
        setTypeIncidencesClosedWeek(data)
      })
      .catch(({ response }) => {
        ExecutionPermit({ response })
        console.log('Error useFetchTypeIncidencesClosedWeek', response)
      })
    setLoadingTypeIncidencesClosedWeek(false)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      _getTypeIncidencesClosed()
    }, 120000)
    _getTypeIncidencesClosed()
    return () => clearInterval(timer)
  }, [])
  return { typeIncidencesClosedWeek, loadingTypeIncidencesClosedWeek }
}
