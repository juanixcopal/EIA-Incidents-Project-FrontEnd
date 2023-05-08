import { useFetchTypeIncidencesClosed, useFetchTypeIncidencesClosedByRangeDate } from './fetch-data'
import { useState } from 'react'

export const useFetchStatistics = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [formattedStartDate, setFormattedStartDate] = useState(getFirstDayOfMonth())
  const [formattedEndDate, setFormattedEndDate] = useState(new Date().toISOString().substring(0, 10))

  const handleStartDateChange = date => {
    setStartDate(date)
  }

  const handleEndDateChange = date => {
    setEndDate(date)
  }

  const handleSubmit = () => {
    const startDateFormatted = startDate.format('YYYY-MM-DD')
    const endDateFormatted = endDate.format('YYYY-MM-DD')
    setFormattedStartDate(startDateFormatted)
    setFormattedEndDate(endDateFormatted)
  }

  const FetchTypeIncidencesClosed = useFetchTypeIncidencesClosed()
  const FetchTypeIncidencesClosedByRangeDate = useFetchTypeIncidencesClosedByRangeDate({ formattedStartDate, formattedEndDate })

  return {
    FetchTypeIncidencesClosed,
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    handleSubmit,
    FetchTypeIncidencesClosedByRangeDate
  }
}

const getFirstDayOfMonth = () => {
  const today = new Date()
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 2)
  return firstDayOfMonth.toISOString().substring(0, 10)
}
