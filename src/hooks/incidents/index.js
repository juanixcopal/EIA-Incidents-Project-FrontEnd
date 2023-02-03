import { useState } from 'react'
import { useActions } from './actions.js'
import { defaultData, defaultDataIncidents, defaultDataModal, defaultDataClassroom } from './default-data'
import { useFetchFloors, useFetchClassrooms, useFetchReports, useFetchReportingData } from './fetch-data'
import socket from '../../config/socket.io'

export const useFetchInitIncidents = () => {
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

  const handleInputChangeIncident = event => setDataIncident({ ...dataIncident, [event.target.name]: event.target.value })

  const FetchFloors = useFetchFloors()
  const FetchClassrooms = useFetchClassrooms({ data })
  const FetchReportsData = useFetchReports()
  const FetchDataReports = useFetchReportingData({ socket }) // INTEGRATE TEST FOR EMIT BROADCAST EVENT

  const Actions = useActions({ FetchDataReports, dataIncident, toggle, dataModal, socket })

  return {
    data,
    handleInputChange,
    FetchFloors,
    FetchClassrooms,
    FetchReportsData,
    FetchDataReports,
    dataModal,
    dataIncident,
    toggle,
    handleInputChangeIncident,
    Actions
  }
}
