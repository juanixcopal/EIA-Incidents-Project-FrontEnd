import { useState, useEffect } from 'react'
import { getCarritosChromebook, getEstadosChromebook, getChromebooksByArmario, getChromebooksActiveByCupboard } from '../../data/chromebooks/get.js'
import ExecutionPermit from 'helpers/execution-permit.helper.js'

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
          ExecutionPermit({ response })
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
          ExecutionPermit({ response })
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
      .catch(({ response }) => {
        ExecutionPermit({ response })
        console.log('Error fetch-data chromebooks by armario', response)
      })
    setLoadingChromebooksByArmario(false)
  }

  useEffect(() => {
    if (dataModal.params?.id_armario) {
      _getChromebooksByArmario()
    }
    // eslint-disable-next-line
  }, [dataModal.params])

  return { chromebooksByArmario, loadingChromebooksByArmario, _getChromebooksByArmario }
}

export const useFetchChromebooksActiveByCupboard = ({ dataModal }) => {
  const [chromebooksActiveByCupboard, setChromebooksActiveByCupboard] = useState([])
  const [loadingChromebooksActiveByCupboard, setLoadingChromebooksActiveByCupboard] = useState(false)

  const _getChromebooksActiveByCupboard = async () => {
    setLoadingChromebooksActiveByCupboard(true)
    await getChromebooksActiveByCupboard({ dataModal })
      .then(({ data }) => {
        setChromebooksActiveByCupboard(data[0].chromebooksActivas)
      })
      .catch(({ response }) => {
        ExecutionPermit({ response })
        console.log('Error fetch-data total chromebooks by cupboard', response)
      })
    setLoadingChromebooksActiveByCupboard(false)
  }

  useEffect(() => {
    if (dataModal.params?.id_armario) {
      _getChromebooksActiveByCupboard()
    }
    // eslint-disable-next-line
  }, [dataModal.params])

  return { chromebooksActiveByCupboard, loadingChromebooksActiveByCupboard, _getChromebooksActiveByCupboard }
}
