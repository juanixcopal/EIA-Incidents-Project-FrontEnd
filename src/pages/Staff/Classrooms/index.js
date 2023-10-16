import { Grid, Button } from '@mui/material'
import { gridSpacing } from 'store/constant'
import { useFetchInitClassrooms } from 'hooks/inventory'
import { useContext } from 'react'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

import { AuthContext } from 'provider/global.provider'

import Loading from 'ui-component/loading'
import MainModal from './modal-component'

import Floors from './floors'

const ClassroomsPage = () => {
  const { authData, rolAccess } = useContext(AuthContext)
  const rol = authData.rol_usuario

  const mainHook = useFetchInitClassrooms()

  const { FetchFloors } = mainHook
  const { loadingFloors } = FetchFloors

  return (
    <>
      <Loading loading={loadingFloors} />
      <MainModal useFetchInit={mainHook} />

      {!loadingFloors && (
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
                        color='primary'
                        // onClick={() => toggle(null, 'Crear Chromebook', 'create-chromebook')}
                      >
                        Agregar al inventario
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12}>
            <Floors mainHook={mainHook} />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ClassroomsPage
