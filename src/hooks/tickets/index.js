import { useFetchClosedTicketsCurrentMonth, useFetchClosedTicketsFirstSemester, useFetchClosedTicketsSecondSemester, useFetchOpenTickets } from './fetch-data'

export const useFetchTickets = () => {
  const FetchClosedTicketsCurrentMonth = useFetchClosedTicketsCurrentMonth()
  const FetchClosedTicketsFirstSemester = useFetchClosedTicketsFirstSemester()
  const FetchClosedTicketsSecondSemester = useFetchClosedTicketsSecondSemester()
  const FetchOpenTickets = useFetchOpenTickets()

  return {
    FetchClosedTicketsCurrentMonth,
    FetchClosedTicketsFirstSemester,
    FetchClosedTicketsSecondSemester,
    FetchOpenTickets
  }
}
