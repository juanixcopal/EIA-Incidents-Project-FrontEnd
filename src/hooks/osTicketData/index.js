import { useState } from 'react'
import { defaultDataModal } from './default_data'
import { useActions } from './actions'
import {
  useFetchClosedTicketsCurrentWeek,
  useFetchClosedTicketsCurrentMonth,
  useFetchClosedTicketsFirstSemester,
  useFetchClosedTicketsSecondSemester,
  useFetchDataTicketsByStaff,
  useFetchOpenTickets,
  useFetchPermissionPageDatosOsTicket
} from './fetch_data'

export const useFetchTickets = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [selectedItems, setSelectedItems] = useState([])

  const toggle = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const onClose = (_, title, component, params) => {
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
  const FetchClosedTicketsCurrentWeek = useFetchClosedTicketsCurrentWeek()
  const FetchDataTicketsByStaff = useFetchDataTicketsByStaff({ dataModal })
  const Actions = useActions({ selectedItems, toggle, FetchPermissionPageDatosOsTicket })

  return {
    dataModal,
    toggle,
    Actions,
    FetchClosedTicketsCurrentMonth,
    FetchClosedTicketsFirstSemester,
    FetchClosedTicketsSecondSemester,
    FetchOpenTickets,
    FetchPermissionPageDatosOsTicket,
    FetchDataTicketsByStaff,
    FetchClosedTicketsCurrentWeek,
    onClose,
    setSelectedItems,
    selectedItems
  }
}
