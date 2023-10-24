import { useState } from 'react'
import { format } from 'date-fns'
import { useActions } from './actions'
import {
  useFetchTypeIncidencesClosed,
  useFetchTypeIncidencesClosedByRangeDate,
  useFetchPermissionPageEstadisticas,
  useFetchClosedTicketsCurrentWeek,
  useFetchDataTicketsByStaff,
  useFetchTypeIncidencesClosedWeek,
  useFetchClosedTicketsDataByRange
} from './fetch-data'
import { defaultDataModal } from './default-data'

export const useFetchInitStatistics = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [formattedStartDate, setFormattedStartDate] = useState(getFirstDayOfMonth())
  const [formattedEndDate, setFormattedEndDate] = useState(new Date().toISOString().substring(0, 10))
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedDate, setSelectedDate] = useState('')
  const [formattedStartDateMonth, setFormattedStartDateMonth] = useState(getFirstDayOfMonth())
  const [formattedEndDateMonth, setFormattedEndDateMonth] = useState(new Date().toISOString().substring(0, 10))

  const getWeekNumber = date => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000
    const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
    const year = date.getFullYear().toString()
    const paddedWeekNumber = weekNumber.toString().padStart(2, '0')
    return year + paddedWeekNumber
  }

  const currentDate = new Date()

  const currentWeek = getWeekNumber(currentDate)
  const currentweekly = `${currentWeek.toString().padStart(2, '0')}`

  const [weekly, setNewWeek] = useState(currentweekly)

  const handleWeekChange = event => {
    const selectedDate = new Date(event.target.value)
    const selectedWeekNumber = getWeekNumber(selectedDate)
    const formattedDate = format(new Date(selectedDate), 'yyyy-MM-dd')
    setSelectedDate(formattedDate)
    setNewWeek(selectedWeekNumber)
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

  const onClose = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const FetchTypeIncidencesClosed = useFetchTypeIncidencesClosed()
  const FetchTypeIncidencesClosedByRangeDate = useFetchTypeIncidencesClosedByRangeDate({ formattedStartDate, formattedEndDate })
  const FetchPermissionPageEstadisticas = useFetchPermissionPageEstadisticas()
  const Actions = useActions({ selectedItems, toggle, FetchPermissionPageEstadisticas })
  const FetchClosedTicketsCurrentWeek = useFetchClosedTicketsCurrentWeek({ weekly })
  const FetchDataTicketsByStaff = useFetchDataTicketsByStaff({ dataModal, weekly })
  const FetchTypeIncidencesClosedWeek = useFetchTypeIncidencesClosedWeek()
  const FetchClosedTicketsDataByRange = useFetchClosedTicketsDataByRange({ formattedStartDateMonth, formattedEndDateMonth })

  return {
    FetchClosedTicketsCurrentWeek,
    FetchPermissionPageEstadisticas,
    FetchDataTicketsByStaff,
    FetchTypeIncidencesClosed,
    FetchTypeIncidencesClosedWeek,
    FetchTypeIncidencesClosedByRangeDate,
    toggle,
    dataModal,
    onClose,
    setSelectedItems,
    selectedItems,
    Actions,
    handleWeekChange,
    selectedDate,
    formattedStartDate,
    formattedEndDate,
    setFormattedStartDate,
    setFormattedEndDate,
    setFormattedStartDateMonth,
    setFormattedEndDateMonth,
    formattedStartDateMonth,
    formattedEndDateMonth,
    FetchClosedTicketsDataByRange
  }
}

const getFirstDayOfMonth = () => {
  const today = new Date()
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 2)
  return firstDayOfMonth.toISOString().substring(0, 10)
}
