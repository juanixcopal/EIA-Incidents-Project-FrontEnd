import { ModalBody, ModalFooter, Table, Button } from 'reactstrap'
const ModifyItemView = ({ useFetchInit }) => {
  const { FetchPermissionPageDatosOsTicket, handleCheckboxChange, handleSubmit } = useFetchInit
  const { permissionPageOsTicket, loadingPermission } = FetchPermissionPageDatosOsTicket
  const { toggle } = useFetchInit

  return (
    <>
      <ModalBody>
        <Table className='align-items-center table-flush' responsive>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>Componente</th>
              <th scope='col'>Ver</th>
            </tr>
          </thead>
          <tbody>
            {permissionPageOsTicket.map(item => {
              const { ver_item, id_item_pagina, label } = item
              return (
                <tr key={id_item_pagina}>
                  <td>{label}</td>
                  <th scope='row'>
                    <label>
                      <input type='checkbox' defaultChecked={ver_item} name={id_item_pagina} onChange={handleCheckboxChange} />
                    </label>
                  </th>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <div className='col-12'>
          <Button onClick={handleSubmit}>Enviar</Button>
          <Button disabled={loadingPermission} type='submit' style={{ float: 'right' }} color='success'>
            Guardar
          </Button>
          <Button disabled={loadingPermission} type='button' style={{ float: 'left' }} onClick={toggle} color='danger'>
            Cancelar
          </Button>
        </div>
      </ModalFooter>
    </>
  )
}

export default ModifyItemView
