import { Grid } from '@mui/material'
import { gridSpacing } from 'store/constant'

import UsersTable from './usersTable'

const UsersPages = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <UsersTable />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default UsersPages
