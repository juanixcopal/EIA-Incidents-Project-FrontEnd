import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Grid, Typography, Input } from '@mui/material'

import MainCard from 'ui-component/cards/MainCard'
import Loading from 'ui-component/loading'
import { gridSpacing } from 'store/constant'

const CombinedDataTable = ({ mainHook }) => {
  const { formattedStartDateMonth, formattedEndDateMonth, setFormattedStartDateMonth, setFormattedEndDateMonth, FetchClosedTicketsDataByRange } = mainHook

  const { closedTicketsDataByRange, loadingClosedTicketsDataByRange } = FetchClosedTicketsDataByRange

  const dataWithIds = closedTicketsDataByRange.map((item, index) => ({
    id: index + 1,
    ...item
  }))

  const columns = [
    { field: 'number', headerName: 'Ticket', width: 100 },
    { field: 'created', headerName: 'Fecha', width: 100 },
    { field: 'topic', headerName: 'Tema de ayuda', width: 250 },
    { field: 'subject', headerName: 'Asunto', width: 550 },
    { field: 'poster', headerName: 'De', width: 180 },
    {
      field: 'priority_desc',
      headerName: 'Prioridad',
      width: 120
    },
    { field: 'staff_name', headerName: 'Cerrado por', width: 200 }
  ]

  return (
    <>
      <MainCard>
        <Loading loading={loadingClosedTicketsDataByRange} />
        {!loadingClosedTicketsDataByRange && (
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='h4'>Datos tickets por rango de fecha</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container alignContent='center' justifyContent='space-between'>
                <Grid item>
                  <Typography variant='body1'>Fecha Inicio</Typography>
                  <Input type='date' value={formattedStartDateMonth} onChange={e => setFormattedStartDateMonth(e.target.value)} />
                </Grid>

                <Grid item>
                  <Typography variant='body1'>Fecha Fin</Typography>
                  <Input type='date' value={formattedEndDateMonth} onChange={e => setFormattedEndDateMonth(e.target.value)} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ pt: '16px !important' }}>
              <Grid item>
                <Grid container direction='column' spacing={1}>
                  <Grid item>
                    {dataWithIds.length >= 1 ? (
                      <>
                        <div style={{ height: 700, width: '100%' }}>
                          <DataGrid
                            rows={dataWithIds}
                            columns={columns}
                            initialState={{
                              pagination: {
                                paginationModel: { pageSize: 10 }
                              }
                            }}
                            loading={loadingClosedTicketsDataByRange}
                          />
                        </div>
                      </>
                    ) : (
                      <div className='App'>
                        <Typography variant='subtitle2'>Aún no hay tickets cerrados en este rango</Typography>
                      </div>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </MainCard>
    </>
  )
}

export default CombinedDataTable
