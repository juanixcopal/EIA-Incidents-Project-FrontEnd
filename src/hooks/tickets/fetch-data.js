import { useEffect, useState } from 'react'
import { getClosedTicketsCurrentMonth, getClosedTicketsFirstSemester, getClosedTicketsSecondSemester, getOpenTickets } from '../../data/tickets/get.js'

export const useFetchClosedTicketsCurrentMonth = () => {
  const [closedMonth, setClosedMonth] = useState([])

  useEffect(() => {
    ;(async () => {
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
    })()
  }, [])
  return { closedMonth }
}

export const useFetchClosedTicketsFirstSemester = () => {
  const [closedFirstSemester, setClosedFirstSemester] = useState([])

  useEffect(() => {
    ;(async () => {
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
    })()
  }, [])
  return { closedFirstSemester }
}

export const useFetchClosedTicketsSecondSemester = () => {
  const [closedSecondSemester, setClosedSecondSemester] = useState([])

  useEffect(() => {
    ;(async () => {
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
    })()
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
