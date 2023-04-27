import { useState } from 'react'
import { defaultDataModal } from './default-data'
import {
  useFetchClosedTicketsCurrentMonth,
  useFetchClosedTicketsFirstSemester,
  useFetchClosedTicketsSecondSemester,
  useFetchOpenTickets,
  useFetchTypeIncidencesClosed,
  useFetchPermissionPageDatosOsTicket
} from './fetch-data'
import { useActions } from './actions'

export const useFetchTickets = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)

  const [checkedItems, setCheckedItems] = useState({})

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
  const FetchTypeIncidencesClosed = useFetchTypeIncidencesClosed()
  const FetchPermissionPageDatosOsTicket = useFetchPermissionPageDatosOsTicket()
  const Actions = useActions({})

  return {
    Actions,
    toggle,
    dataModal,
    FetchClosedTicketsCurrentMonth,
    FetchClosedTicketsFirstSemester,
    FetchClosedTicketsSecondSemester,
    FetchOpenTickets,
    FetchTypeIncidencesClosed,
    FetchPermissionPageDatosOsTicket,
    handleCheckboxChange,
    handleSubmit
  }
}
