import { useState } from 'react'
import { defaultData, defaultDataModal, defaultDataIncidents } from './default-data'
import { useActions } from './actions.js'
import { useFetchReports, useFetchStates } from './fetch-data'
import sockets from '../../config/socket.io'

export const useFetchInitDashboard = () => {
  const [data, setData] = useState(defaultData)
  const [dataIncident, setDataIncident] = useState(defaultDataIncidents)
  const [dataModal, setDataModal] = useState(defaultDataModal)

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const toggle = (_, title, component, params) => {
    dataModal.open && setDataIncident(defaultDataIncidents)

    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const FetchReportsData = useFetchReports({ sockets })
  const FetchStates = useFetchStates()
  const Actions = useActions({ FetchReportsData, data, toggle, dataModal, sockets })

  return {
    data,
    handleInputChange,
    dataModal,
    toggle,
    FetchReportsData,
    FetchStates,
    dataIncident,
    Actions
  }
}
