import { useState } from 'react'
import {
  useFetchTypeIncidencesClosed,
  useFetchTypeIncidencesClosedByRangeDate,
  useFetchPermissionPageEstadisticas,
  useFetchClosedTicketsByWeek,
  useFetchDataTicketsByStaff,
  useFetchTypeIncidencesClosedWeek
} from './fetch-data'
import { defaultDataModal } from './default-data'

export const useFetchStatistics = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [formattedStartDate, setFormattedStartDate] = useState(getFirstDayOfMonth())
  const [formattedEndDate, setFormattedEndDate] = useState(new Date().toISOString().substring(0, 10))
  const [checkedItems, setCheckedItems] = useState({})

  const handleStartDateChange = date => {
    setStartDate(date)
  }

  const handleEndDateChange = date => {
    setEndDate(date)
  }

  const handleCheckboxChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    })
  }

  const handleSubmit = () => {
    const startDateFormatted = startDate.format('YYYY-MM-DD')
    const endDateFormatted = endDate.format('YYYY-MM-DD')
    setFormattedStartDate(startDateFormatted)
    setFormattedEndDate(endDateFormatted)
  }

  const handleSubmitItemPage = event => {
    event.preventDefault()
  }

  const currentDate = new Date()

  const getWeekNumber = date => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000
    const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
    const year = date.getFullYear().toString()
    const paddedWeekNumber = weekNumber.toString().padStart(2, '0')
    return year + paddedWeekNumber
  }

  const currentWeek = getWeekNumber(currentDate)
  const currentweekly = `${currentWeek.toString().padStart(2, '0')}`

  const [weekly, setNewWeek] = useState(currentweekly)

  const handleWeekChange = event => {
    const selectedDate = new Date(event.target.value)
    const selectedWeekNumber = getWeekNumber(selectedDate)
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

  const FetchTypeIncidencesClosed = useFetchTypeIncidencesClosed()
  const FetchTypeIncidencesClosedByRangeDate = useFetchTypeIncidencesClosedByRangeDate({ formattedStartDate, formattedEndDate })
  const FetchPermissionPageEstadisticas = useFetchPermissionPageEstadisticas()
  const FetchClosedTicketsByWeek = useFetchClosedTicketsByWeek({ weekly })
  const FetchDataTicketsByStaff = useFetchDataTicketsByStaff({ dataModal, weekly })
  const FetchTypeIncidencesClosedWeek = useFetchTypeIncidencesClosedWeek()

  return {
    FetchTypeIncidencesClosed,
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    handleSubmit,
    FetchTypeIncidencesClosedByRangeDate,
    FetchPermissionPageEstadisticas,
    toggle,
    dataModal,
    handleCheckboxChange,
    handleSubmitItemPage,
    FetchClosedTicketsByWeek,
    FetchDataTicketsByStaff,
    handleWeekChange,
    FetchTypeIncidencesClosedWeek
  }
}

const getFirstDayOfMonth = () => {
  const today = new Date()
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 2)
  return firstDayOfMonth.toISOString().substring(0, 10)
}
