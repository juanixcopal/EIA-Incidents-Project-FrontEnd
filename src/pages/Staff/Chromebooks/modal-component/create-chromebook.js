import { Box, TextField } from '@mui/material'

const CreateChromebook = ({ useFetchInit }) => {
  return (
    <>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: 'auto' }
        }}
        noValidate
        autoComplete='off'
      >
        <TextField name='numero_chromebook' label='Numero de Chromebook' variant='outlined' required />
      </Box>
    </>
  )
}

export default CreateChromebook
