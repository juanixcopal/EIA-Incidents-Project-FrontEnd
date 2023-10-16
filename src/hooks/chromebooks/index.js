import { useState } from 'react'
import { defaultDataModal, defaultData, defaultDataSubModal } from './default-data'
import { useFetchCarritosChromebook, useFetchEstadosChromebook, useFetchChromebooksByArmario, useFetchChromebooksActiveByCupboard } from './fetch-data'
import { useActions } from './actions.js'

export const useFetchInitChromebooks = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [dataSubModal, setDataSubModal] = useState(defaultDataSubModal)
  const [data, setData] = useState(defaultData)
  const [updateData, setUpdateData] = useState([])

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

  const subToggle = (_, subTitle, subComponent, subParams) => {
    setDataSubModal({
      ...dataSubModal,
      subOpen: !dataSubModal.subOpen,
      subTitle,
      subComponent,
      subParams
    })
  }

  const subOnClose = (_, subTitle, subComponent, subParams) => {
    setDataSubModal({
      ...dataSubModal,
      subOpen: !dataSubModal.subOpen,
      subTitle,
      subComponent,
      subParams
    })
  }

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleChangeData = formData => {
    setUpdateData(formData)
  }

  const FetchCarritosChromebook = useFetchCarritosChromebook()
  const FetchEstadosChromebook = useFetchEstadosChromebook()
  const FetchChromebooksByArmario = useFetchChromebooksByArmario({ dataModal })
  const FetchChromebooksActiveByCupboard = useFetchChromebooksActiveByCupboard({ dataModal })
  const Actions = useActions({ data, toggle, updateData, FetchChromebooksByArmario, subToggle, FetchChromebooksActiveByCupboard })

  return {
    dataModal,
    dataSubModal,
    toggle,
    subToggle,
    FetchCarritosChromebook,
    FetchEstadosChromebook,
    FetchChromebooksByArmario,
    FetchChromebooksActiveByCupboard,
    handleInputChange,
    Actions,
    onClose,
    subOnClose,
    handleChangeData,
    updateData
  }
}
