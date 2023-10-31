import { useState, useEffect } from 'react'
import { getFloors, getClassroomsByFloor, getComputerByRoom, getDataComputerByComputer } from '../../data/inventory/get.js'
import ExecutionPermit from 'helpers/execution-permit.helper.js'

export const useFetchFloors = () => {
  const [floors, setFloors] = useState([])
  const [loadingFloors, setLoadingFloors] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingFloors(true)
      await getFloors()
        .then(({ data }) => {
          setFloors(data)
        })
        .catch(({ response }) => {
          ExecutionPermit({ response })
          console.log('Error fetch-data Floors', response)
        })
      setLoadingFloors(false)
    })()
  }, [])
  return { floors, loadingFloors }
}

export const useFetchClassroomsByFloor = ({ data }) => {
  const { id_planta } = data
  const [classroomsByFloor, setClassroomsByFloor] = useState([])
  const [loadingClassroomsByFloor, setLoadingClassroomsByFloor] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingClassroomsByFloor(true)
      await getClassroomsByFloor({ data })
        .then(({ data }) => {
          setClassroomsByFloor(data)
        })
        .catch(error => {
          console.log('error fetch-data Classrooms', error)
        })

      setLoadingClassroomsByFloor(false)
    })()
    // eslint-disable-next-line
  }, [id_planta])

  return { classroomsByFloor, loadingClassroomsByFloor }
}

export const useFetchComputerByRoom = ({ dataModal }) => {
  const [computerByRoom, setComputerByRoom] = useState([])
  const [loadingComputerByRoom, setLoadingComputerByRoom] = useState(false)

  const _getComputerByRoom = async () => {
    setLoadingComputerByRoom(true)

    await getComputerByRoom({ dataModal })
      .then(({ data }) => {
        setComputerByRoom(data)
      })
      .catch(({ response }) => {
        ExecutionPermit({ response })
        console.log('Error fetch-data Computer By Room', response)
      })
    setLoadingComputerByRoom(false)
  }

  useEffect(() => {
    if (dataModal.params?.id_aula) {
      _getComputerByRoom()
    }
    // eslint-disable-next-line
  }, [dataModal.params])

  return { computerByRoom, loadingComputerByRoom, _getComputerByRoom }
}

export const useFetchDataComputer = ({ dataComputer }) => {
  const [computerData, setComputerData] = useState([])
  const [loadingComputerData, setLoadingComputerData] = useState(false)

  const _getComputerData = async () => {
    setLoadingComputerData(true)

    await getDataComputerByComputer({ dataComputer })
      .then(({ data }) => {
        setComputerData(data)
      })
      .catch(({ response }) => {
        ExecutionPermit({ response })
        console.log('Error fetch-data Computer By Room', response)
      })
    setLoadingComputerData(false)
  }

  useEffect(() => {
    // if (dataComputer?.id_dg_ordenador) {
    _getComputerData()
    // }
    // eslint-disable-next-line
  }, [dataComputer])

  return { computerData, loadingComputerData, _getComputerData }
}
