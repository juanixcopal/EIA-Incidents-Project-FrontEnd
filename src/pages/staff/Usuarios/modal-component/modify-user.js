import { ModalBody, ModalFooter, Button } from 'reactstrap'
import { FormControl, Select, MenuItem } from '@mui/material'
import { useState } from 'react'

const ModifyUser = ({ useFetchInit }) => {
  const { FetchRoles, toggle, dataModal, handleInputChange, Actions } = useFetchInit
  const { id_rol, username } = dataModal.params
  const { roles, loadingRoles } = FetchRoles
  // eslint-disable-next-line
  const [newIdRol, setNewIdRol] = useState('')
  const { updateRoleUser } = Actions

  const handleChange = e => {
    setNewIdRol(e.target.value)
    handleInputChange(e)
  }
  return (
    <>
      <form onSubmit={updateRoleUser}>
        <ModalBody>
          <div>
            <div>
              <h3 style={{ color: '#409DC4' }}>Usuario: {username}</h3>
            </div>
            <div className='form-group'>
              <FormControl fullWidth>
                <Select defaultValue={id_rol} name='id_rol' onChange={handleChange}>
                  {roles.map(item => {
                    const { id_rol, rol_usuario } = item
                    return (
                      <MenuItem key={id_rol} value={id_rol}>
                        {rol_usuario}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className='col-12'>
            <Button disabled={loadingRoles} type='submit' style={{ float: 'right' }} color='success'>
              Guardar
            </Button>
            <Button disabled={loadingRoles} type='button' style={{ float: 'left' }} onClick={toggle} color='danger'>
              Cancelar
            </Button>
          </div>
        </ModalFooter>
      </form>
    </>
  )
}

export default ModifyUser
