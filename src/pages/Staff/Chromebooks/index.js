import { Grid, Button } from '@mui/material'
import { gridSpacing } from 'store/constant'
import { useContext } from 'react'

import { AuthContext } from 'provider/global.provider'

import Loading from 'ui-component/loading'
import MainModal from './modal-component'

import { useFetchInitChromebooks } from 'hooks/chromebooks'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

import ChromebooksCabinets from './chromebooksCabinets'

const ChromebooksPage = () => {
  const { authData } = useContext(AuthContext)
  const rol = authData.rol_usuario

  const mainHook = useFetchInitChromebooks()

  const { FetchCarritosChromebook, toggle } = mainHook
  const { loadingCarritos } = FetchCarritosChromebook

  return (
    <>
      <Loading loading={loadingCarritos} />
      <MainModal useFetchInit={mainHook} />
      {!loadingCarritos && (
        <Grid container spacing={gridSpacing}>
          {(rol === 'superadmin' || rol === 'administrador') && (
            <Grid item xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Grid container alignContent='center' justifyContent='space-between' sx={{ pb: '16px !important' }}>
                    <Grid item>
                      <Button
                        variant='contained'
                        startIcon={<AddCircleOutlineIcon />}
                        color='inherit'
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
              <ChromebooksCabinets />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ChromebooksPage
