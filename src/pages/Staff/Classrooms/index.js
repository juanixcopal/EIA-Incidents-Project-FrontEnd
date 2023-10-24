import { Grid, Button } from '@mui/material'
import { gridSpacing } from 'store/constant'
import { useFetchInitClassrooms } from 'hooks/inventory'

import { useTheme } from '@emotion/react'

import { Link } from 'react-router-dom'

import DomainAddIcon from '@mui/icons-material/DomainAdd'

import Loading from 'ui-component/loading'
import MainModal from './modal-component'

import Floors from './floors'

const ClassroomsPage = () => {
  const theme = useTheme()

  const mainHook = useFetchInitClassrooms()

  const { FetchFloors } = mainHook
  const { loadingFloors } = FetchFloors

  return (
    <>
      <Loading loading={loadingFloors} />
      <MainModal useFetchInit={mainHook} />

      {!loadingFloors && (
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid container alignContent='center' justifyContent='space-between' sx={{ pb: '16px !important' }}>
              <Grid item>
                <Link to='/inventario/UEA-A'>
                  <Button variant='contained' startIcon={<DomainAddIcon />} style={{ background: theme.palette.primary[800] }}>
                    UEA-A
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to='/inventario/UEA-B'>
                  <Button variant='contained' startIcon={<DomainAddIcon />} style={{ background: theme.palette.primary[800] }}>
                    UEA-B
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to='/inventario/UEA-C'>
                  <Button variant='contained' startIcon={<DomainAddIcon />} style={{ background: theme.palette.primary[800] }}>
                    UEA-C
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to='/inventario/UEA-D'>
                  <Button variant='contained' startIcon={<DomainAddIcon />} style={{ background: theme.palette.primary[800] }}>
                    UEA-D
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to='/inventario/UEA-E'>
                  <Button variant='contained' startIcon={<DomainAddIcon />} style={{ background: theme.palette.primary[800] }}>
                    UEA-E
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Floors mainHook={mainHook} />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ClassroomsPage
