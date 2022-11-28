import { useState } from 'react'
import { useFetchReportingData } from './fetch-data.js'
import { useActions } from './actions.js'
import { defaultData, defaultDataModal } from './default-data.js'
export const useFetchInitDataReports = () => {
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

    const FetchDataReports = useFetchReportingData()

    const Actions = useActions({ FetchDataReports, data, toggle, dataModal })

    return { FetchDataReports, dataModal, data, toggle, handleInputChange, Actions }
}
