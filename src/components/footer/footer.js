import * as React from 'react'
import { Box, Container, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const Footer = props => {
    const { description } = props

    return (
        <Box component='footer' sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth='lg'>
                <Typography variant='subtitle1' align='center' color='text.secondary' component='p'>
                    {description}
                </Typography>
            </Container>
        </Box>
    )
}

Footer.propsTypes = {
    description: PropTypes.string.isRequired
}

export default Footer
