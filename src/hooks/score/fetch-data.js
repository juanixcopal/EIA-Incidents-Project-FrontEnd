import { useEffect, useState } from 'react'
import { getUsersAndScore, getDemerits, getMerits } from '../../data/score/get.js'

export const useFetchUsersAndScore = () => {
  const [score, setScore] = useState([])

  const _Score = async () => {
    await getUsersAndScore()
      .then(({ data }) => {
        setScore(data)
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error', response)
      })
  }

  useEffect(() => {
    _Score()
  }, [])
  return { score, _Score }
}

export const useFetchDemerits = () => {
  const [demerits, setDemerits] = useState([])

  useEffect(() => {
    ;(async () => {
      await getDemerits()
        .then(({ data }) => {
          setDemerits(data)
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            localStorage.clear()
            window.location.reload()
          }
          console.log('Error', response)
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
        .catch(({ response }) => {
          if (response.status === 401) {
            localStorage.clear()
            window.location.reload()
          }
          console.log('Error', response)
        })
    })()
  }, [])
  return { merits }
}
