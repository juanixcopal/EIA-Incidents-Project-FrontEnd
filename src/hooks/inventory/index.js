import { useState } from 'react'
import { useFetchFloors, useFetchClassroomsByFloor, useFetchComputerByRoom, useFetchDataComputer } from './fetch-data'
import { defaultDataModal, defaultData, defaultIdComputer } from './default-data'

export const useFetchInitClassrooms = () => {
  const [data, setData] = useState(defaultData)
  const [dataComputer, setDataComputer] = useState(defaultIdComputer)
  const [expanded, setExpanded] = useState(false)

  const [dataModal, setDataModal] = useState(defaultDataModal)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
    setData({ ...data, id_planta: panel })
  }

  const handleChangeComputer = event => {
    setDataComputer({ ...dataComputer, id_dg_ordenador: event })
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

  const FetchFloors = useFetchFloors()
  const FetchClassroomsByFloor = useFetchClassroomsByFloor({ data })
  const FetchComputerByRoom = useFetchComputerByRoom({ dataModal })
  const FetchDataComputer = useFetchDataComputer({ dataComputer })

  return {
    FetchFloors,
    toggle,
    onClose,
    dataModal,
    FetchClassroomsByFloor,
    FetchComputerByRoom,
    expanded,
    handleChange,
    handleChangeComputer,
    FetchDataComputer
  }
}
