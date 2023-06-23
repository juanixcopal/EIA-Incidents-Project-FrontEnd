import { useState, useEffect } from 'react'

import {
  getClosedTicketsCurrentWeek,
  getClosedTicketsCurrentMonth,
  getClosedTicketsFirstSemester,
  getClosedTicketsSecondSemester,
  getDataTicketByStaff,
  getOpenTickets,
  getpermissionPageDatosOsTicket
} from '../../data/osTicketData/get.js'

export const useFetchClosedTicketsCurrentMonth = () => {
  const [closedCurrentMonth, setClosedCurrentMonth] = useState([])
  const [loadingClosedCurrentMonth, setLoadingClosedCurrentMonth] = useState(false)

  const _getClosedTicketsCurrentMonth = async () => {
    setLoadingClosedCurrentMonth(true)
    await getClosedTicketsCurrentMonth()
      .then(({ data }) => {
        setClosedCurrentMonth(data)
      })
      .catch(({ response }) => {
        if (response.status === 500) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error useFetchClosedTicketsCurrentMonth', response)
      })
    setLoadingClosedCurrentMonth(false)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      _getClosedTicketsCurrentMonth()
    }, 120000)
    _getClosedTicketsCurrentMonth()
    return () => clearInterval(timer)
  }, [])

  return { closedCurrentMonth, loadingClosedCurrentMonth }
}

export const useFetchClosedTicketsFirstSemester = () => {
  const [closedTicketsFirstSemester, setClosedTicketsFirstSemester] = useState([])
  const [loadingClosedTicketsFirstSemester, setLoadingClosedTicketsFirstSemester] = useState(false)

  const _getClosedTicketsFirstSemester = async () => {
    setLoadingClosedTicketsFirstSemester(true)
    await getClosedTicketsFirstSemester()
      .then(({ data }) => {
        setClosedTicketsFirstSemester(data)
      })
      .catch(({ response }) => {
        if (response.status === 500) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error useFetchClosedTicketsFirstSemester', response)
      })
    setLoadingClosedTicketsFirstSemester(false)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      _getClosedTicketsFirstSemester()
    }, 120000)
    _getClosedTicketsFirstSemester()
    return () => clearInterval(timer)
  }, [])

  return { closedTicketsFirstSemester, loadingClosedTicketsFirstSemester }
}

export const useFetchClosedTicketsSecondSemester = () => {
  const [closedTicketsSecondSemester, setClosedTicketsSecondSemester] = useState([])
  const [loadingClosedTicketsSecondSemester, setLoadingClosedTicketsSecondSemester] = useState(false)

  const _getClosedTicketSecondSemester = async () => {
    setLoadingClosedTicketsSecondSemester(true)
    await getClosedTicketsSecondSemester()
      .then(({ data }) => {
        setClosedTicketsSecondSemester(data)
      })
      .catch(({ response }) => {
        if (response.status === 500) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error useFetchClosedTicketsSecondSemester', response)
      })
    setLoadingClosedTicketsSecondSemester(false)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      _getClosedTicketSecondSemester()
    }, 120000)
    _getClosedTicketSecondSemester()
    return () => clearInterval(timer)
  }, [])

  return { closedTicketsSecondSemester, loadingClosedTicketsSecondSemester }
}

export const useFetchOpenTickets = () => {
  const [openTickets, setOpenTickets] = useState([])
  const [totalTickets, setTotalTickets] = useState(0)
  const [loading, setLoading] = useState(false)

  const _getOpenTickets = async () => {
    setLoading(true)
    await getOpenTickets()
      .then(({ data }) => {
        setOpenTickets(data)
        setTotalTickets(data[0].tickets_abiertos)
      })
      .catch(({ response }) => {
        if (response.status === 500) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error useFetchOpenTickets', response)
      })
    setLoading(false)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      _getOpenTickets()
    }, 120000)
    _getOpenTickets()
    return () => clearInterval(timer)
  }, [])

  return { openTickets, totalTickets, loading }
}

export const useFetchPermissionPageDatosOsTicket = () => {
  const [permissionPageOsTicket, setPermissionPageOsTicket] = useState([])
  const [loadingPermissionItems, setLoadingPermissionItems] = useState(false)

  const _permissionPageDatosOsTicket = async () => {
    setLoadingPermissionItems(true)
    await getpermissionPageDatosOsTicket()
      .then(({ data }) => {
        setPermissionPageOsTicket(data)
      })
      .catch(({ response }) => {
        console.log('Error useFetchPermissionPageDatosOsTicket', response)
      })
    setLoadingPermissionItems(false)
  }

  useEffect(() => {
    _permissionPageDatosOsTicket()
  }, [])

  return { permissionPageOsTicket, loadingPermissionItems, _permissionPageDatosOsTicket }
}

export const useFetchClosedTicketsCurrentWeek = () => {
  const [closedCurrentWeek, setClosedCurrentWeek] = useState([])
  const [loadingClosedCurrentWeek, setLoadingClosedCurrentWeek] = useState(false)

  const _getClosedTicketsByWeek = async () => {
    setLoadingClosedCurrentWeek(true)
    await getClosedTicketsCurrentWeek()
      .then(({ data }) => {
        setClosedCurrentWeek(data)
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error useFetchClosedTicketsByWeek', response)
      })
    setLoadingClosedCurrentWeek(false)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      _getClosedTicketsByWeek()
    }, 120000)
    _getClosedTicketsByWeek()
    return () => clearInterval(timer)
    // eslint-disable-next-line
  }, [])

  return { closedCurrentWeek, loadingClosedCurrentWeek }
}

export const useFetchDataTicketsByStaff = ({ dataModal }) => {
  const [dataTicketByStaff, setDataTicketByStaff] = useState([])
  const [loadingDataTicketByStaff, setLoadingDataTicketByStaff] = useState(false)

  const _getDataTicketByStaff = async () => {
    setLoadingDataTicketByStaff(true)
    await getDataTicketByStaff({ dataModal })
      .then(({ data }) => {
        setDataTicketByStaff(data)
      })
      .catch(error => {
        console.log('Error useFetchDataTicketsByStaff', error)
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
