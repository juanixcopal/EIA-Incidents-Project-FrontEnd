import { useEffect, useState } from 'react'
import {
  getClosedTicketsCurrentMonth,
  getClosedTicketsFirstSemester,
  getClosedTicketsSecondSemester,
  getOpenTickets,
  getTypeIncidencesClosed,
  getpermissionPageDatosOsTicket
} from '../../data/tickets/get.js'

export const useFetchClosedTicketsCurrentMonth = () => {
  const [closedMonth, setClosedMonth] = useState([])

  const _getClosedTicketsCurrentMonth = async () => {
    await getClosedTicketsCurrentMonth()
      .then(({ data }) => {
        setClosedMonth(data)
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
      _getClosedTicketsCurrentMonth()
    }, 120000)
    _getClosedTicketsCurrentMonth()
    return () => clearInterval(timer)
  }, [])

  return { closedMonth }
}

export const useFetchClosedTicketsFirstSemester = () => {
  const [closedFirstSemester, setClosedFirstSemester] = useState([])

  const _getClosedTicketsFirstSemester = async () => {
    await getClosedTicketsFirstSemester()
      .then(({ data }) => {
        setClosedFirstSemester(data)
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
      _getClosedTicketsFirstSemester()
    }, 120000)
    _getClosedTicketsFirstSemester()
    return () => clearInterval(timer)
  }, [])

  return { closedFirstSemester }
}

export const useFetchClosedTicketsSecondSemester = () => {
  const [closedSecondSemester, setClosedSecondSemester] = useState([])

  const _getClosedTicketSecondSemester = async () => {
    await getClosedTicketsSecondSemester()
      .then(({ data }) => {
        setClosedSecondSemester(data)
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
      _getClosedTicketSecondSemester()
    }, 120000)
    _getClosedTicketSecondSemester()
    return () => clearInterval(timer)
  }, [])

  return { closedSecondSemester }
}

export const useFetchOpenTickets = () => {
  const [openTickets, setOpenTickets] = useState([])
  const [totalTickets, setTotalTickets] = useState(0)

  const _getOpenTickets = async () => {
    await getOpenTickets()
      .then(({ data }) => {
        setOpenTickets(data)
        setTotalTickets(data[0].tickets_abiertos)
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
      _getOpenTickets()
    }, 120000)
    _getOpenTickets()
    return () => clearInterval(timer)
  }, [])

  return { openTickets, totalTickets }
}

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

export const useFetchPermissionPageDatosOsTicket = () => {
  const [permissionPageOsTicket, setPermissionPageOsTicket] = useState([])
  const [loadingPermission, setLoadingPermission] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingPermission(true)
      await getpermissionPageDatosOsTicket()
        .then(({ data }) => {
          setPermissionPageOsTicket(data)
        })
        .catch(({ response }) => {
          console.log('Error fetch-data permission page Datos OsTicket', response)
        })
      setLoadingPermission(false)
    })()
  }, [])
  return { permissionPageOsTicket, loadingPermission }
}
