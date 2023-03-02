import Header from '../../../components/header/Header'
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'

const Score = () => {
  return (
    <>
      <Header />
      <div className='col-12 mt--8 row' style={{ paddingLeft: '6em' }}>
        <Card className='radius-10' sx={{ minWidth: 275 }}>
          <CardContent>
            <div style={{ display: 'flex', paddingBottom: '15px' }}>
              <Typography sx={{ fontSize: 14 }}>Username</Typography>
              <Typography sx={{ fontSize: 14 }} style={{ paddingLeft: '30px' }} color='text.secondary'>
                14
              </Typography>
            </div>

            <div style={{ display: 'flex' }}>
              <Typography sx={{ fontSize: 14 }}>Username</Typography>
              <Typography sx={{ fontSize: 14 }} style={{ paddingLeft: '30px' }} color='text.secondary'>
                14
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Score
