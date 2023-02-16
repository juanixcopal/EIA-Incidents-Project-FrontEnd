import { useEffect, useState } from 'react'
import { getFloors, getClassrooms, getReports, getReportingData, getIncidencesForFloor } from '../../data/incidents/get.js'

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
        .catch(error => {
          console.log('error fetch-data Floors', error)
        })
      setLoadingFloors(false)
    })()
  }, [])

  return { floors, loadingFloors }
}

export const useFetchClassrooms = ({ data }) => {
  const { id_floor } = data
  const [classrooms, setClassrooms] = useState([])
  const [loadingClassrooms, setLoadingClassrooms] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingClassrooms(true)
      await getClassrooms({ data })
        .then(({ data }) => {
          setClassrooms(data)
        })
        .catch(error => {
          console.log('error fetch-data Classrooms', error)
        })
      setLoadingClassrooms(false)
    })()
    // eslint-disable-next-line
  }, [id_floor])

  return { classrooms, loadingClassrooms }
}

export const useFetchReportingData = ({ sockets }) => {
  const [reportsData, setReportsData] = useState([])

  const _getReportingData = async () => {
    await getReportingData()
      .then(({ data }) => {
        setReportsData(data)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  useEffect(() => {
    _getReportingData()
  }, [])

  const receiveMessage = () => {
    // console.log('MESSAGE')
    _getReportingData()
  }

  useEffect(() => {
    sockets.incidencesSocket.on('refresh_report_incidences', receiveMessage)

    return () => {
      sockets.incidencesSocket.off('refresh_report_incidences', receiveMessage)
    }
    // eslint-disable-next-line
  }, [])
  return { reportsData, _getReportingData }
}

export const useFetchIncidencesForFloor = ({ dataModal }) => {
  const [indicendesForFloor, setIndicendesForFloor] = useState([])
  const [loadingIncidencesForFloor, setLoadingIncidencesForFloor] = useState(false)

  const _getIncidencesForFloor = async () => {
    setLoadingIncidencesForFloor(true)
    await getIncidencesForFloor({ dataModal })
      .then(({ data }) => {
        setIndicendesForFloor(data)
        // setTestRefresh(false)
      })
      .catch(error => {
        console.log('error', error)
      })
    setLoadingIncidencesForFloor(false)
  }

  useEffect(() => {
    if (dataModal.params?.id_aula) {
      _getIncidencesForFloor()
    }
    // eslint-disable-next-line
  }, [dataModal.params])
  return { indicendesForFloor, loadingIncidencesForFloor }
}
