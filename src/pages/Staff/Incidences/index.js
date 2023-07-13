import { Grid } from '@mui/material'
import { gridSpacing } from 'store/constant'

import OpenIncidences from './openIncidences'

const IncidencesPage = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <OpenIncidences />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default IncidencesPage
