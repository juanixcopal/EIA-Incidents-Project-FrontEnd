import { useFetchInitLabelInventory } from '../../../hooks/labelInventory/index'

import { Grid, Button } from '@mui/material'
import { gridSpacing } from 'store/constant'

import { ButtonReturn } from 'ui-component/button'

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

import { useTheme } from '@emotion/react'

const LabelUEAA = () => {
  const theme = useTheme()

  const mainHook = useFetchInitLabelInventory()
  const { FetchIdentifierUEAA } = mainHook
  console.log(FetchIdentifierUEAA)
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ButtonReturn />
        </Grid>
        <Grid item xs={12}>
          <Grid container alignContent='center' justifyContent='space-between' sx={{ pb: '16px !important' }}>
            <Grid item>
              <Button variant='contained' startIcon={<PersonAddAltIcon />} style={{ background: theme.palette.primary.main }}>
                Agregar al inventario
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacing} style={{ pd: '20px !important' }}>
        <Grid item xs={12}>
          Aqui ira todos los datos de UEA-A
        </Grid>
      </Grid>
    </>
  )
}

export default LabelUEAA
