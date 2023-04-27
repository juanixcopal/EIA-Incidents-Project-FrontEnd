import { ModalBody } from 'reactstrap'
import { Table } from 'reactstrap'
import { AuthContext } from '../../../../provider/global.provider'
import { useContext } from 'react'
import { IconButton } from '@mui/material'
import ComputerIcon from '@mui/icons-material/Computer'
import SubMainModal from './subModal/index.js'

const ViewChromebooks = ({ useFetchInit }) => {
  const { FetchChromebooksByArmario, subToggle } = useFetchInit
  const { chromebooksByArmario } = FetchChromebooksByArmario

  const { authData } = useContext(AuthContext)
  const rol = authData.rol_usuario

  return (
    <>
      <SubMainModal useFetchInit={useFetchInit} />
      <ModalBody>
        <h5>{`Chromebooks Operativas: ${chromebooksByArmario.filter(e => e.id_estado_chromebook === 1).length}`}</h5>
        <Table className='align-items-center table-flush' responsive>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>Chromebook #</th>
              <th scope='col'>Prod ID</th>
              <th scope='col'>SN</th>
              <th scope='col'>Estado</th>
              {rol === 'superadmin' ? <th scope='col'>Modificar</th> : <></>}
            </tr>
          </thead>
          <tbody>
            {chromebooksByArmario.map(item => {
              const { id_chromebook, id_estado_chromebook, estado_chromebook, numero_chromebook, prodid, sn } = item

              return (
                <tr key={id_chromebook}>
                  <th scope='row'>{`Chromebook # ${numero_chromebook}`}</th>
                  <td>{prodid}</td>
                  <td>{sn}</td>
                  <td>
                    {estado_chromebook}
                    <span
                      style={{
                        background: `${
                          id_estado_chromebook === 1
                            ? '#00FF00'
                            : '' || id_estado_chromebook === 2
                            ? '#FFFF00'
                            : '' || id_estado_chromebook === 3
                            ? '#FF0000'
                            : '' || id_estado_chromebook === 4
                            ? '#808080'
                            : '' || id_estado_chromebook === 5
                            ? '#FFA500'
                            : ''
                        }`,
                        width: 10,
                        height: 10,
                        borderRadius: 50,
                        display: 'inline-block',
                        marginLeft: 10
                      }}
                    ></span>
                  </td>
                  {rol === 'superadmin' ? (
                    <td>
                      <IconButton
                        color='primary'
                        aria-label='upload picture'
                        component='label'
                        onClick={() => subToggle(null, 'Modificar Chromebook', 'modify-chromebook', item)}
                      >
                        <ComputerIcon />
                      </IconButton>
                    </td>
                  ) : (
                    <></>
                  )}
                </tr>
              )
            })}
          </tbody>
        </Table>
      </ModalBody>
    </>
  )
}

export default ViewChromebooks
