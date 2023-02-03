import { useEffect, useState } from 'react'
import { getFloors, getClassrooms, getReports, getReportingData } from '../../data/incidents/get.js'
let refresh = false

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
  }, [id_floor])

  return { classrooms, loadingClassrooms }
}

export const useFetchReports = () => {
  const [dataReports, setDataReports] = useState([])
  const [loadingReports, setLoadingReports] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingReports(true)
      await getReports()
        .then(({ data }) => {
          setDataReports(data)
        })
        .catch(error => {
          console.log('error', error)
        })
      setLoadingReports(false)
    })()
    // eslint-disable-next-line
  }, [])
  return { dataReports, loadingReports }
}

export const useFetchReportingData = ({ socket }) => {
  const [reportsData, setReportsData] = useState([])
  const refresIncidences = () => (refresh = !refresh)

  useEffect(() => {
    ;(async () => {
      await getReportingData()
        .then(({ data }) => {
          setReportsData(data)
        })
        .catch(error => {
          console.log('error', error)
        })
    })()
    // eslint-disable-next-line
  }, [refresh])

  const receiveMessage = message => {
    console.log('BROADCAST RECEIVED', message)
  }

  useEffect(() => {
    console.log('LOADING EVENT')
    socket.on('broadcastTest', receiveMessage)

    return () => {
      socket.off('broadcastTest', receiveMessage)
    }
  }, [])

  return { reportsData, refresIncidences }
}
