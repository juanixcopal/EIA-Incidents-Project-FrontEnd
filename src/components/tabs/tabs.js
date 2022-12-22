import React, { useState } from 'react'
import Badge from '@mui/material/Badge'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'
import Box from '@mui/material/Box'

import { useFetchInitFlats } from '../../hooks/flats/index'
import { useFetchInitDataReports } from '../../hooks/dataReports/index'

import Incidences from 'pages/reports/incidents'

const Tabs = () => {
  const { FetchFlatsData } = useFetchInitFlats()
  const { flatsData } = FetchFlatsData

  const { FetchDataReports } = useFetchInitDataReports()
  const { reportsData } = FetchDataReports
  // console.log(refresIncidences)

  const handleChanges = (event, newValue) => {
    setValue(newValue)
  }

  const [value, setValue] = useState(1)
  return (
    <>
      <p className='waterMark'>By. Intervención Ágil</p>
      <TabContext value={String(value)}>
        <Box>
          <TabList onChange={handleChanges} aria-label='lab API tabs example'>
            {flatsData.map(item => {
              const { id_planta, planta } = item
              return (
                <Tab
                  label={
                    <Badge
                      // badgeContent={reportsData.filter(e => e.estado === 'abierto' && e.id_planta === id_planta).length}
                      color='primary'
                    >
                      {planta}
                    </Badge>
                  }
                  value={String(id_planta)}
                  key={id_planta}
                />
              )
            })}
          </TabList>
        </Box>
        <Incidences />
      </TabContext>
    </>
  )
}

export default Tabs
