import { useFetchUsersAndScore, useFetchDemerits, useFetchMerits } from './fetch-data'
import { defaultDataModal } from './default-data'
import { useState } from 'react'
import { useActions } from './actions.js'

export const useFetchInitUsersAndScore = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)

  const [selectedMerits, setSelectedMerits] = useState([])
  const [scoreToAdd, setScoreToAdd] = useState(0)

  const [selectedDemerits, setSelectedDemerits] = useState([])
  const [scoreToDeduct, setScoreToDeduct] = useState(0)

  const toggle = (_, title, component, params) => {
    dataModal.open && setSelectedMerits([])
    dataModal.open && setSelectedDemerits([])
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const handleMeritSelection = merit => {
    if (selectedMerits.includes(merit)) {
      setSelectedMerits(selectedMerits.filter(d => d !== merit))
      setScoreToAdd(scoreToAdd - merit.score)
    } else {
      setSelectedMerits([...selectedMerits, merit])
      setScoreToAdd(scoreToAdd + merit.score)
    }
  }

  const handleDemeritSelection = demerit => {
    if (selectedDemerits.includes(demerit)) {
      setSelectedDemerits(selectedDemerits.filter(d => d !== demerit))
      setScoreToDeduct(scoreToDeduct - demerit.score)
    } else {
      setSelectedDemerits([...selectedDemerits, demerit])
      setScoreToDeduct(scoreToDeduct + demerit.score)
    }
  }

  const FetchUsersAndScore = useFetchUsersAndScore()
  const FetchDemerits = useFetchDemerits()
  const FetchMerits = useFetchMerits()

  const Actions = useActions({ dataModal, scoreToDeduct, toggle, FetchDemerits })

  return {
    FetchUsersAndScore,
    toggle,
    dataModal,
    FetchDemerits,
    FetchMerits,
    selectedMerits,
    handleMeritSelection,
    scoreToAdd,
    selectedDemerits,
    handleDemeritSelection,
    scoreToDeduct,
    Actions
  }
}
