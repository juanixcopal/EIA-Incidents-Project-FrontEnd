import { useFetchUsersAndScore, useFetchDemerits } from './fetch-data'
import { defaultDataModal } from './default-data'
import { useState } from 'react'

export const useFetchInitUsersAndScore = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)

  const toggle = (_, title, component, params) => {
    // dataModal.open && setDataIncident(defaultDataIncidents)
    // dataModal.open
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const FetchUsersAndScore = useFetchUsersAndScore()
  const FetchDemerits = useFetchDemerits()

  return {
    FetchUsersAndScore,
    toggle,
    dataModal,
    FetchDemerits
  }
}
