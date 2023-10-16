import { useState } from 'react'
import { useFetchFloors, useFetchClassroomsByFloor, useFetchComputerByRoom } from './fetch-data'
import { defaultDataModal, defaultData } from './default-data'

export const useFetchInitClassrooms = () => {
  const [data, setData] = useState(defaultData)
  const [expanded, setExpanded] = useState(false)

  const [dataModal, setDataModal] = useState(defaultDataModal)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
    // eslint-disable-next-line
    setData({ ...data, ['id_planta']: panel })
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

  return {
    FetchFloors,
    toggle,
    onClose,
    dataModal,
    FetchClassroomsByFloor,
    FetchComputerByRoom,
    expanded,
    handleChange
  }
}
