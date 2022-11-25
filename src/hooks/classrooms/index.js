import { useState } from 'react'
import { defaultData, defaultDataModal } from './default-data'
import { useFetchClassrooms, useFetchTypeClassrooms, useFetchFlats } from './fetch-data'
import { useActions } from './actions'

export const useFetchInitClassrooms = () => {
    const [data, setData] = useState(defaultData)
    const [dataModal, setDataModal] = useState(defaultDataModal)

    const toggle = (_, title, component, params) => {
        dataModal.open && setData(defaultData)

        setDataModal({
            ...dataModal,
            open: !dataModal.open,
            title,
            component,
            params
        })
    }

    const handleInputChange = event => setData({ ...data, [event.target.name]: event.target.value })

    const FetchClassrooms = useFetchClassrooms()
    const FetchTypeClassrooms = useFetchTypeClassrooms()
    const FetchFlats = useFetchFlats()

    const Actions = useActions({ FetchClassrooms, data, toggle })

    return { FetchClassrooms, FetchTypeClassrooms, FetchFlats, dataModal, data, toggle, handleInputChange, Actions }
}
