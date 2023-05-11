import { useEffect, useState } from 'react'
import {
  getClosedTicketsCurrentMonth,
  getClosedTicketsFirstSemester,
  getClosedTicketsSecondSemester,
  getOpenTickets,
  getpermissionPageDatosOsTicket,
  getClosedTicketsByWeek,
  getDataTicketByStaff
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

export const useFetchClosedTicketsByWeek = ({ weekly }) => {
  const [closedWeek, setClosedWeek] = useState([])

  const _getClosedTicketsByWeek = async () => {
    await getClosedTicketsByWeek({ weekly })
      .then(({ data }) => {
        setClosedWeek(data)
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
      _getClosedTicketsByWeek()
    }, 120000)
    _getClosedTicketsByWeek()
    return () => clearInterval(timer)
  }, [])

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
