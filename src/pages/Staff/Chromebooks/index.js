import { Grid, Button } from '@mui/material'
import { gridSpacing } from 'store/constant'
import { useContext } from 'react'
import { useTheme } from '@mui/material/styles'

import { AuthContext } from 'provider/global.provider'

import Loading from 'ui-component/loading'
import MainModal from './modal-component'

import { useFetchInitChromebooks } from 'hooks/chromebooks'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

import ChromebooksCabinets from './chromebooksCabinets'

const ChromebooksPage = () => {
  const theme = useTheme()
  const { authData, rolAccess } = useContext(AuthContext)
  const rol = authData.rol_usuario

  const mainHook = useFetchInitChromebooks()

  const { FetchCarritosChromebook, toggle } = mainHook
  const { loadingArmarios } = FetchCarritosChromebook

  return (
    <>
      <Loading loading={loadingArmarios} />
      <MainModal useFetchInit={mainHook} />
      {!loadingArmarios && (
        <Grid container spacing={gridSpacing}>
          {rolAccess[rol] && (
            <Grid item xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Grid container alignContent='center' justifyContent='space-between' sx={{ pb: '16px !important' }}>
                    <Grid item>
                      <Button
                        variant='contained'
                        startIcon={<AddCircleOutlineIcon />}
                        style={{ background: theme.palette.primary.main }}
                        onClick={() => toggle(null, 'Crear Chromebook', 'create-chromebook')}
                      >
                        Crear Chromebook
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              <ChromebooksCabinets mainHook={mainHook} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ChromebooksPage
