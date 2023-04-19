import { useState } from 'react'
import { defaultDataModal, defaultData } from './default-data'
import { useFetchCarritosChromebook, useFetchEstadosChromebook, useFetchChromebooksByArmario } from './fetch-data'
import { useActions } from './actions.js'

export const useFetchInitChromebooks = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [data, setData] = useState(defaultData)

  const toggle = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const FetchCarritosChromebook = useFetchCarritosChromebook()
  const FetchEstadosChromebook = useFetchEstadosChromebook()
  const FetchChromebooksByArmario = useFetchChromebooksByArmario({ dataModal })
  const Actions = useActions({ data, toggle })

  return {
    dataModal,
    toggle,
    FetchCarritosChromebook,
    FetchEstadosChromebook,
    FetchChromebooksByArmario,
    handleInputChange,
    Actions
  }
}
