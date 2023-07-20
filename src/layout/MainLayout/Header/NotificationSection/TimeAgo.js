import { useEffect, useState } from 'react'

import { Grid, Typography } from '@mui/material'

const TimeAgo = ({ minutesAgo }) => {
  const [timeAgo, setTimeAgo] = useState('')

  useEffect(() => {
    const getTimeAgo = () => {
      if (minutesAgo < 60) {
        setTimeAgo(`Hace ${minutesAgo} min${minutesAgo === 1 ? 'uto' : 'utos'}`)
      } else {
        const hours = Math.floor(minutesAgo / 60)
        setTimeAgo(`Hace ${hours} hora${hours === 1 ? '' : 's'}`)
      }
    }

    getTimeAgo()
    const interval = setInterval(getTimeAgo, 60000)

    return () => {
      clearInterval(interval)
    }
  }, [minutesAgo])

  return (
    <Grid container justifyContent='flex-end'>
      <Grid item xs={12}>
        <Typography variant='caption' display='block' gutterBottom>
          {timeAgo}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default TimeAgo
