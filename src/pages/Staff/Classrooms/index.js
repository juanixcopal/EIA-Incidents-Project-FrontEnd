import { Grid, Typography } from '@mui/material'
import { gridSpacing } from 'store/constant'
import { useFetchInitClassrooms } from 'hooks/classrooms'

const ClassroomsPage = () => {
  const mainHook = useFetchInitClassrooms()

  const { FetchFloors } = mainHook
  const { floors, loadingFloors } = FetchFloors

  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Grid container alignContent='center' justifyContent='space-between'>
                    <Grid item>
                      <Typography variant='h3' color='inherit'>
                        Holaaa
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ClassroomsPage
