import { useState } from 'react'
import { useActions } from './actions.js'
import { defaultData, defaultDataIncidents, defaultDataModal } from './default-data'
import { useFetchFloors, useFetchClassrooms, useFetchReportingData, useFetchIncidencesForFloor } from './fetch-data'
import sockets from '../../config/socket.io'

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
  const FetchDataReports = useFetchReportingData({ sockets })
  const FetchIncidencesForFloor = useFetchIncidencesForFloor({ dataModal })

  const Actions = useActions({ FetchDataReports, dataIncident, toggle, dataModal, sockets })

  return {
    data,
    handleInputChange,
    FetchFloors,
    FetchClassrooms,
    FetchDataReports,
    dataModal,
    dataIncident,
    toggle,
    handleInputChangeIncident,
    FetchIncidencesForFloor,
    Actions
  }
}
