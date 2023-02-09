import { useState } from 'react'
import { defaultData } from './default-data'

// import { useActions } from './actions.js'
// import { useFetchFloors, useFetchClassrooms, useFetchReports, useFetchReportingData, useFetchIncidencesForFloor, useFetchStates } from './fetch-data'

export const useFetchInitIncidents = () => {
  const [data, setData] = useState(defaultData)
  //   const [dataIncident, setDataIncident] = useState(defaultDataIncidents)
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

  //   const FetchFloors = useFetchFloors()
  //   const FetchClassrooms = useFetchClassrooms({ data })
  //   const FetchReportsData = useFetchReports()
  //   const FetchDataReports = useFetchReportingData({ sockets }) // INTEGRATE TEST FOR EMIT BROADCAST EVENT
  //   const FetchIncidencesForFloor = useFetchIncidencesForFloor({ dataModal })
  //   const FetchStates = useFetchStates()

  //   const Actions = useActions({ FetchDataReports, dataIncident, toggle, dataModal, sockets })

  return {
    data,
    handleInputChange,
    dataModal,
    toggle
    // Actions,
    // FetchStates
  }
}
