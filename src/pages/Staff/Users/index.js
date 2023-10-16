import { useContext } from 'react'
import { Grid, Button } from '@mui/material'
import { gridSpacing } from 'store/constant'
import { AuthContext } from 'provider/global.provider'
import { useFetchInitUsers } from 'hooks/users'

import UsersTable from './usersTable'
import SuperAdminTable from './SuperAdminTable'
import MainModal from './modal-component'

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

const UsersPages = () => {
  const { authData, rolAccess } = useContext(AuthContext)
  const rol = authData.rol_usuario
  const id_user = authData.id_user

  const mainHook = useFetchInitUsers()

  const { toggle } = mainHook

  return (
    <>
      <MainModal useFetchInit={mainHook} />
      <Grid container spacing={gridSpacing}>
        {rolAccess[rol] && (
          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent='center' justifyContent='space-between' sx={{ pb: '16px !important' }}>
                  <Grid item>
                    <Button variant='contained' startIcon={<PersonAddAltIcon />} color='secondary' onClick={() => toggle(null, 'Crear Usuario', 'create-user')}>
                      Crear Usuario
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}

        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <UsersTable rol={rol} mainHook={mainHook} />
            </Grid>

            {id_user === 1 && (
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <SuperAdminTable rol={rol} mainHook={mainHook} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default UsersPages
