import { Grid } from '@mui/material'
import { gridSpacing } from 'store/constant'

import { ButtonReturn } from 'ui-component/button'

const LabelUEAB = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ButtonReturn />
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacing} style={{ pd: '20px !important' }}>
        <Grid item xs={12}>
          Aqui ira todos los datos de UEA-B
        </Grid>
      </Grid>
    </>
  )
}

export default LabelUEAB
