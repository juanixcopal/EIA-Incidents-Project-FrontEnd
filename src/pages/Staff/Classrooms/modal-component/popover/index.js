import { Typography, Grid } from '@mui/material'
import Popover from '@mui/material/Popover'
import { bindPopover } from 'material-ui-popup-state'
import { gridSpacing } from 'store/constant'

const DataComputer = ({ popupState, useFetchInit }) => {
  const { FetchDataComputer } = useFetchInit

  const { computerData } = FetchDataComputer

  return (
    <>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Grid container spacing={gridSpacing} style={{ padding: '15px' }}>
          {computerData.map(item => {
            const {
              id_dg_ordenador,
              identificador_ordenador,
              numero_serie,
              modelo,
              procesador,
              asignado,
              facultad,
              tipo,
              marca,
              estado,
              estado_color,
              ram,
              tipo_ram,
              capacidad_disco_duro,
              tipo_disco_duro,
              sede,
              aula,
              planta,
              tipo_aula
            } = item

            return (
              <Grid key={id_dg_ordenador} item>
                <Typography variant='h5'>
                  <b>Identificador Ordenador: </b>
                  {identificador_ordenador}
                </Typography>
                <Typography variant='h5'>
                  <b>Numero de Serie: </b>
                  {numero_serie}
                </Typography>
                <Typography variant='h5'>
                  <b>Modelo: </b>
                  {modelo}
                </Typography>
                <Typography variant='h5'>
                  <b>Procesador: </b>
                  {procesador}
                </Typography>

                <Typography variant='h5'>
                  <b>Asignado: </b>
                  {asignado}
                </Typography>
                <Typography variant='h5'>
                  <b>Facultad: </b>
                  {facultad}
                </Typography>
                <Typography variant='h5'>
                  <b>Tipo: </b>
                  {tipo}
                </Typography>
                <Typography variant='h5'>
                  <b>Marca: </b>
                  {marca}
                </Typography>
                <Typography variant='h5'>
                  <b>Estado: </b>
                  {estado}
                  <span
                    style={{
                      background: estado_color,
                      width: 10,
                      height: 10,
                      borderRadius: 50,
                      display: 'inline-block',
                      marginLeft: 10
                    }}
                  />
                </Typography>
                <Typography variant='h5'>
                  <b>Memoria RAM: </b>
                  {ram}
                </Typography>
                <Typography variant='h5'>
                  <b>Tipo de RAM: </b>
                  {tipo_ram}
                </Typography>
                <Typography variant='h5'>
                  <b>Capacidad Disco Duro: </b>
                  {capacidad_disco_duro}
                </Typography>
                <Typography variant='h5'>
                  <b>Tipo Disco Duro: </b>
                  {tipo_disco_duro}
                </Typography>
                <Typography variant='h5'>
                  <b>Sede: </b>
                  {sede}
                </Typography>
                <Typography variant='h5'>
                  <b>Aula: </b>
                  {aula}
                </Typography>
                <Typography variant='h5'>
                  <b>Planta: </b>
                  {planta}
                </Typography>
                <Typography variant='h5'>
                  <b>Estado: </b>
                  {estado}
                </Typography>
                <Typography variant='h5'>
                  <b>Tipo Aula: </b>
                  {tipo_aula}
                </Typography>
              </Grid>
            )
          })}
        </Grid>
      </Popover>
    </>
  )
}

export default DataComputer
