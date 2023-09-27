import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const Loading = ({ loading }) => {
  return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>{loading && <CircularProgress />}</Box>
}

export default Loading
