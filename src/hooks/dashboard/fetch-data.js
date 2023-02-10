import { useState, useEffect } from 'react'
import { getReports, getStates } from '../../data/dashboard/get.js'

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
