import { useState, useEffect } from 'react'
import { getCarritosChromebook, getEstadosChromebook, getChromebooksByArmario } from '../../data/chromebooks/get.js'

export const useFetchCarritosChromebook = () => {
  const [armarios, setArmarios] = useState([])
  const [loadingArmarios, setLoadingArmarios] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingArmarios(true)
      await getCarritosChromebook()
        .then(({ data }) => {
          setArmarios(data)
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            localStorage.clear()
            window.location.reload()
          }
          console.log('Error fetch-data armarios', response)
        })
      setLoadingArmarios(false)
    })()
  }, [])
  return { armarios, loadingArmarios }
}

export const useFetchEstadosChromebook = () => {
  const [estadoChromebook, setEstadoChromebook] = useState([])
  const [loadingEstadoChromebook, setLoadingEstadoChromebook] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoadingEstadoChromebook(true)
      await getEstadosChromebook()
        .then(({ data }) => {
          setEstadoChromebook(data)
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            localStorage.clear()
            window.location.reload()
          }
          console.log('Error fetch-data states', response)
        })
      setLoadingEstadoChromebook(false)
    })()
  }, [])
  return { estadoChromebook, loadingEstadoChromebook }
}

export const useFetchChromebooksByArmario = ({ dataModal }) => {
  const [chromebooksByArmario, setChromebooksByArmario] = useState([])
  const [loadingChromebooksByArmario, setLoadingChromebooksByArmario] = useState(false)

  const _getChromebooksByArmario = async () => {
    setLoadingChromebooksByArmario(true)
    await getChromebooksByArmario({ dataModal })
      .then(({ data }) => {
        setChromebooksByArmario(data)
      })
      .catch(error => {
        console.log('Error', error)
      })
    setLoadingChromebooksByArmario(false)
  }

  useEffect(() => {
    if (dataModal.params?.id_armario) {
      _getChromebooksByArmario()
    }
    // eslint-disable-next-line
  }, [dataModal.params])

  return { chromebooksByArmario, loadingChromebooksByArmario }
}
