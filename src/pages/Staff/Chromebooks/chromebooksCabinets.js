import { Grid, Typography, Card, CardMedia } from '@mui/material'
import MainCard from 'ui-component/cards/MainCard'

import { gridSpacing } from 'store/constant'

import MainModal from './modal-component'

import { useFetchInitChromebooks } from 'hooks/chromebooks'

const ChromebooksCabinets = () => {
  const mainHook = useFetchInitChromebooks()
  const { toggle, FetchCarritosChromebook } = mainHook
  const { armarios } = FetchCarritosChromebook
  return (
    <>
      <MainModal useFetchInit={mainHook} />

      {armarios.map(item => {
        const { id_armario, numero_carrito } = item

        return (
          <Grid key={id_armario} item lg={6} md={6} sm={12} xs={12}>
            <MainCard>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Grid container alignContent='center' justifyContent='space-between'>
                    <Grid item>
                      <Typography variant='h4'>Armario chromebook {numero_carrito}</Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sx={{ pt: '16px !important' }}>
                    <Card style={{ cursor: 'pointer' }} onClick={() => toggle(null, 'Chomebooks del armario', 'view-chromebook', item)}>
                      <Grid item>
                        <Grid container direction='column' spacing={1} alignItems='center' justifyContent='center'>
                          <Grid item>
                            <CardMedia
                              component='img'
                              alt='Armario Chromebook'
                              image='https://www.campuspdi.com/productos/imagenes/img_16299_f1beb139f1de2527762b67d2797e27e0_16.jpg'
                              style={{
                                height: 350,
                                width: 300
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        )
      })}
    </>
  )
}

export default ChromebooksCabinets
