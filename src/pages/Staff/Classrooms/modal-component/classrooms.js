import { Typography, Grid } from '@mui/material'
import MainCard from 'ui-component/cards/MainCard'
// import { gridSpacing } from 'store/constant'
import Loading from 'ui-component/loading'

const Classrooms = ({ useFetchInit }) => {
  const { FetchComputerByRoom } = useFetchInit

  const { loadingComputerByRoom, computerByRoom } = FetchComputerByRoom

  return (
    <>
      <Loading loading={loadingComputerByRoom} />

      <Grid item xs={12}>
        {!loadingComputerByRoom && (
          <>
            {computerByRoom.map(item => {
              const { id_dg_ordenador, identificador_ordenador } = item

              return (
                <Grid key={id_dg_ordenador} item lg={3} md={3} sm={12} xs={12}>
                  <MainCard style={{ cursor: 'pointer' }}>
                    <Grid item xs={12}>
                      <Grid container alignContent='center' justifyContent='space-between'>
                        <Grid item>
                          <Typography>{identificador_ordenador}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </MainCard>
                </Grid>
              )
            })}
          </>
        )}
      </Grid>
    </>
  )
}

export default Classrooms
