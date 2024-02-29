import { useState } from 'react'
import { Grid, Button } from '@mui/material'
import { gridSpacing } from 'store/constant'

import { DataGridPremium } from '@mui/x-data-grid-premium'
import { DataGrid } from '@mui/x-data-grid'

const Pruebas = () => {
  const columns = [
    { field: 'hora', headerName: 'Hora:' },
    {
      field: 'sala1',
      headerName: 'Sala 1'
    },
    {
      field: 'sala2',
      headerName: 'Sala 2'
    },
    {
      field: 'sala3',
      headerName: 'Sala 3'
    },
    {
      field: 'sala4',
      headerName: 'Sala 4'
    },
    {
      field: 'sala5',
      headerName: 'Sala 5'
    }
  ]

  const hours = [
    { id: 1, hora: '7:00' },
    { id: 2, hora: '7:30' },
    { id: 3, hora: '8:30' },
    { id: 4, hora: '8:00' },
    { id: 5, hora: '9:30' },
    { id: 6, hora: '9:00' },
    { id: 7, hora: '10:30' },
    { id: 8, hora: '10:00' },
    { id: 9, hora: '11:30' },
    { id: 10, hora: '11:00' },
    { id: 11, hora: '12:30' },
    { id: 12, hora: '12:00' },
    { id: 13, hora: '13:30' },
    { id: 14, hora: '13:00' },
    { id: 15, hora: '14:30' },
    { id: 16, hora: '14:00' },
    { id: 17, hora: '15:30' },
    { id: 18, hora: '15:00' },
    { id: 19, hora: '16:30' },
    { id: 20, hora: '16:00' },
    { id: 21, hora: '17:30' },
    { id: 22, hora: '17:00' },
    { id: 23, hora: '18:30' },
    { id: 24, hora: '18:00' },
    { id: 25, hora: '19:30' },
    { id: 26, hora: '19:00' },
    { id: 27, hora: '20:30' },
    { id: 28, hora: '20:00' },
    { id: 29, hora: '21:30' }
  ]

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        {/* <DataGridPremium unstable_cellSelection columns={columns} rows={rows} /> */}
        <table
          style={{
            float: 'left',
            clear: 'both',
            width: '100%',
            borderSpacing: 0,
            borderCollapse: 'separate',
            borderColor: 'white',
            borderWidth: 0,
            borderStyle: 'solid',
            display: 'block'
          }}
        >
          <thead
            style={{
              background: '#008ed0',
              verticalAlign: 'top',
              color: 'white',
              padding: '0 2px'
            }}
          >
            <tr>
              <th style={{ width: '1%' }}>Hora: </th>
              <th>
                <a>Chromebook 1</a>
              </th>
              <th>
                <a>Chromebook 2</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {hours.map((hours, index) => (
              <tr key={hours.id} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#f2f4f6' }}>
                <td>
                  <div>
                    <a>{hours.hora}</a>
                  </div>
                </td>
                {columns.slice(1).map(column => (
                  <td key={column.field} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#f2f4f6' }}></td>
                ))}
              </tr>
            ))} */}
            <tr>
              <td>
                <div>
                  <a>07:00</a>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div>
                  <a>07:30</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <a>08:00</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <a>08:30</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <a>09:00</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <a>09:30</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <a>10:00</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <a>10:30</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </Grid>
  )
}

export default Pruebas
