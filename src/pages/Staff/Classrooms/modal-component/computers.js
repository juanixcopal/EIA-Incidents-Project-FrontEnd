import { Typography, Grid } from '@mui/material'
import MainCard from 'ui-component/cards/MainCard'
import Loading from 'ui-component/loading'
import { gridSpacing } from 'store/constant'

import PopupState, { bindTrigger } from 'material-ui-popup-state'

import DataComputer from './popover'

const Computers = ({ useFetchInit }) => {
  const { FetchComputerByRoom, handleChangeComputer } = useFetchInit

  const { loadingComputerByRoom, computerByRoom } = FetchComputerByRoom

  return (
    <>
      <Loading loading={loadingComputerByRoom} />

      <PopupState variant='popover' popupId='demo-popup-popover'>
        {popupState => (
          <>
            {!loadingComputerByRoom && (
              <Grid container spacing={gridSpacing}>
                {computerByRoom.map(item => {
                  const { id_dg_ordenador, identificador_ordenador } = item

                  return (
                    <Grid key={id_dg_ordenador} item>
                      <MainCard style={{ cursor: 'pointer' }} onClick={() => handleChangeComputer(id_dg_ordenador)}>
                        <Grid container spacing={gridSpacing} {...bindTrigger(popupState)}>
                          <Grid item>
                            <Typography>{identificador_ordenador}</Typography>
                          </Grid>
                        </Grid>
                      </MainCard>
                      <DataComputer popupState={popupState} useFetchInit={useFetchInit} />
                    </Grid>
                  )
                })}
              </Grid>
            )}
          </>
        )}
      </PopupState>
    </>
  )
}

export default Computers
