import { useState, useEffect } from 'react'
import { getStates, getReports } from '../../data/dashboard/get.js'
import ExecutionPermit from 'helpers/execution-permit.helper.js'

export const useFetchReports = ({ sockets }) => {
  const [dataReports, setDataReports] = useState([])
  const [loadingDataReports, setLoadingDataReports] = useState(false)

  const _getReports = async () => {
    setLoadingDataReports(true)
    await getReports()
      .then(({ data }) => {
        setDataReports(data)
      })
      .catch(({ response }) => {
        ExecutionPermit({ response })
        console.log('Error', response)
      })
    setLoadingDataReports(false)
  }

  useEffect(() => {
    _getReports()
  }, [])

  const receiveMessage = () => {
    _getReports()
  }

  useEffect(() => {
    sockets.incidencesSocket.on('refresh_report_incidences', receiveMessage)

    return () => {
      sockets.incidencesSocket.on('refresh_report_incidences', receiveMessage)
    }
    // eslint-disable-next-line
  }, [])

  return { dataReports, _getReports, loadingDataReports }
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
        .catch(({ response }) => {
          ExecutionPermit({ response })
          console.log('Error fetch-data states', response)
        })
      setLoadingState(false)
    })()
  }, [])

  return { state, loadinState }
}
