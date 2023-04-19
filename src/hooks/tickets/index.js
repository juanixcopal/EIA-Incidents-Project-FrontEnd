import { useState } from 'react'
import { defaultDataModal } from './default-data'
import {
  useFetchClosedTicketsCurrentMonth,
  useFetchClosedTicketsFirstSemester,
  useFetchClosedTicketsSecondSemester,
  useFetchOpenTickets,
  useFetchTypeIncidencesClosed
} from './fetch-data'
import { useActions } from './actions'

export const useFetchTickets = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [viewsEditing, setViewsEditing] = useState({})

  const handleInputChange = e => {
    setViewsEditing({ ...viewsEditing, [e.target.name]: e.target.value === 'on' })
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

  const Actions = useActions({})

  return {
    Actions,
    toggle,
    dataModal,
    viewsEditing,
    handleInputChange,
    FetchClosedTicketsCurrentMonth,
    FetchClosedTicketsFirstSemester,
    FetchClosedTicketsSecondSemester,
    FetchOpenTickets,
    FetchTypeIncidencesClosed
  }
}
