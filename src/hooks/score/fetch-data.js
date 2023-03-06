import { useEffect, useState } from 'react'
import { getUsersAndScore, getDemerits, getMerits } from '../../data/score/get.js'

export const useFetchUsersAndScore = () => {
  const [score, setScore] = useState([])

  useEffect(() => {
    ;(async () => {
      await getUsersAndScore()
        .then(({ data }) => {
          setScore(data)
        })
        .catch(error => {
          console.log('ERROR', error)
        })
    })()
  }, [])
  return { score }
}

export const useFetchDemerits = () => {
  const [demerits, setDemerits] = useState([])

  useEffect(() => {
    ;(async () => {
      await getDemerits()
        .then(({ data }) => {
          setDemerits(data)
        })
        .catch(error => {
          console.log('ERROR', error)
        })
    })()
  }, [])
  return { demerits }
}

export const useFetchMerits = () => {
  const [merits, setMerits] = useState([])

  useEffect(() => {
    ;(async () => {
      await getMerits()
        .then(({ data }) => {
          setMerits(data)
        })
        .catch(error => {
          console.log('ERROR', error)
        })
    })()
  }, [])
  return { merits }
}
