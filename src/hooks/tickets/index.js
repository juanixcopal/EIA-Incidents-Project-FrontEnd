import { useState } from 'react'
import { defaultDataModal } from './default-data'
import {
  useFetchClosedTicketsCurrentMonth,
  useFetchClosedTicketsFirstSemester,
  useFetchClosedTicketsSecondSemester,
  useFetchOpenTickets,
  useFetchPermissionPageDatosOsTicket,
  useFetchClosedTicketsByWeek,
  useFetchDataTicketsByStaff
} from './fetch-data'
import { useActions } from './actions'

export const useFetchTickets = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [checkedItems, setCheckedItems] = useState({})

  const now = new Date()
  const onejan = new Date(now.getFullYear(), 0, 1)
  const week = Math.ceil(((now - onejan) / 86400000 + onejan.getDay() + 1) / 7)
  const year = now.getFullYear()
  const weekString = week < 10 ? '0' + week : week.toString()
  const weekly = year.toString() + weekString

  const handleCheckboxChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  const toggle = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const FetchClosedTicketsCurrentMonth = useFetchClosedTicketsCurrentMonth()
  const FetchClosedTicketsFirstSemester = useFetchClosedTicketsFirstSemester()
  const FetchClosedTicketsSecondSemester = useFetchClosedTicketsSecondSemester()
  const FetchOpenTickets = useFetchOpenTickets()
  const FetchPermissionPageDatosOsTicket = useFetchPermissionPageDatosOsTicket()
  const FetchClosedTicketsByWeek = useFetchClosedTicketsByWeek({ weekly })
  const FetchDataTicketsByStaff = useFetchDataTicketsByStaff({ dataModal, weekly })
  const Actions = useActions({})

  return {
    Actions,
    toggle,
    dataModal,
    FetchClosedTicketsCurrentMonth,
    FetchClosedTicketsFirstSemester,
    FetchClosedTicketsSecondSemester,
    FetchOpenTickets,
    FetchPermissionPageDatosOsTicket,
    handleCheckboxChange,
    handleSubmit,
    FetchClosedTicketsByWeek,
    FetchDataTicketsByStaff
  }
}
