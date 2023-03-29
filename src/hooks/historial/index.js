import { useFetchIncidencesByUser } from './fetch-data'
import { useState } from 'react'

export const useFetchInitHistorial = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [formattedDate, setFormattedDate] = useState('00-00-0000')

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  const handleSubmit = () => {
    const newFormattedDate = selectedDate.format('YYYY-MM-DD')
    setFormattedDate(newFormattedDate)
  }

  const FetchIncidencesByUser = useFetchIncidencesByUser({ formattedDate })

  return {
    selectedDate,
    handleDateChange,
    handleSubmit,
    FetchIncidencesByUser
  }
}
