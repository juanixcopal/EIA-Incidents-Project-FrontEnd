import React from 'react';
import '../../styles/reports/reports.css'

import Tabs from '../../components/tabs/tabs';
import Box from '@mui/material/Box';

const BasicTabs = () => {

    return (
        <>
            <div className='Header'>
                <h1 className='Title'>Reporte Incidencias</h1>
            </div>

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <Tabs />
            </Box>
        </>
    )
}

export default BasicTabs;