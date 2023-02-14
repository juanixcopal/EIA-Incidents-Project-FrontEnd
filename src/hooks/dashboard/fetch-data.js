import { useState, useEffect } from 'react'
import { getStates, getReports } from '../../data/dashboard/get.js'

export const useFetchReports = ({ sockets }) => {
  const [dataReports, setDataReports] = useState([])

  const _getReports = async () => {
    await getReports()
      .then(({ data }) => {
        setDataReports(data)
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  useEffect(() => {
    _getReports()
  }, [])

  const receiveMessage = () => {
    // console.log('RECEIVE MESSAGE')
    _getReports()
  }

  useEffect(() => {
    sockets.incidencesSocket.on('refresh_report_incidences', receiveMessage)

    return () => {
      sockets.incidencesSocket.on('refresh_report_incidences', receiveMessage)
    }
    // eslint-disable-next-line
  }, [])

  return { dataReports, _getReports }

  // const [loadingReports, setLoadingReports] = useState(false)

  // useEffect(() => {
  //   ;(async () => {
  //     setLoadingReports(true)
  //     await getReports()
  //       .then(({ data }) => {
  //         setDataReports(data)
  //       })
  //       .catch(error => {
  //         console.log('error', error)
  //       })
  //     setLoadingReports(false)
  //   })()
  //   // eslint-disable-next-line
  // }, [])

  // return { dataReports, loadingReports }
}

export const useFetchStates = () => {
  const [state, setState] = useState([])
  const [loadinState, setLoadingState] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingState(true)
      await getStates()
        .then(({ data }) => {
          setState(data)
        })
        .catch(error => {
          console.log('Error fetch-data states', error)
        })
      setLoadingState(false)
    })()
  }, [])

  return { state, loadinState }
}
