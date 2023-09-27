import { Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, styled, tableCellClasses } from '@mui/material'
import Loading from 'ui-component/loading'
import { gridSpacing } from 'store/constant'
import { useEffect } from 'react'

import { CancelButton, SaveButton } from 'ui-component/button'

const ModifyItemsView = ({ useFetchInit }) => {
  const { FetchPermissionPageEstadisticas, setSelectedItems, selectedItems, onClose, Actions } = useFetchInit
  const { permissionPageEstadistica, loadingPermission } = FetchPermissionPageEstadisticas
  const { modifyItemViewPage } = Actions

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.grey[500],
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  useEffect(() => {
    const allowedItems = permissionPageEstadistica.filter(item => item.ver_item === 1).map(item => item.id_item_pagina)
    setSelectedItems(allowedItems)
    // eslint-disable-next-line
  }, [permissionPageEstadistica])

  const handleCheckboxChange = itemId => {
    setSelectedItems(prevItems => {
      if (prevItems.includes(itemId)) {
        return prevItems.filter(item => item !== itemId)
      } else {
        return [...prevItems, itemId]
      }
    })
  }

  return (
    <>
      <Loading loading={loadingPermission} />
      {!loadingPermission && (
        <form onSubmit={modifyItemViewPage}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid item xs={12} sx={{ pt: '16px !important' }}>
                <Grid item>
                  <Grid container direction='column' spacing={1}>
                    <Grid item>
                      <TableContainer component={Paper}>
                        <Table aria-label='simple table'>
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>Componente</StyledTableCell>
                              <StyledTableCell align='left'>Ver item</StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {permissionPageEstadistica.map(item => {
                              const { id_item_pagina, label } = item
                              const isChecked = selectedItems.includes(id_item_pagina)

                              return (
                                <StyledTableRow key={id_item_pagina}>
                                  <StyledTableCell>{label}</StyledTableCell>
                                  <StyledTableCell>
                                    <Grid item>
                                      <Checkbox checked={isChecked} onChange={() => handleCheckboxChange(id_item_pagina)} />
                                    </Grid>
                                  </StyledTableCell>
                                </StyledTableRow>
                              )
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container alignContent='center' justifyContent='space-between' sx={{ pt: '16px !important' }}>
                <Grid item>
                  <CancelButton disabled={loadingPermission} title='Cancelar' onClick={onClose} />
                </Grid>
                <Grid item>
                  <SaveButton disabled={loadingPermission} title='Guardar' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  )
}

export default ModifyItemsView
