import React from 'react'
import { Skeleton } from '@mui/material'
const IncidencesSkeleton = () => {
    return (
        <>
            <div className='xs-12 row text-center' style={{ placeContent: 'center' }}>
                <Skeleton variant='rounded' width={355} height={50} style={{ borderRadius: '50px' }} />
                {/* <h1>hola mundo</h1> */}
            </div>
            <div>
                <div className='MapClass xs-12'>
                    <Skeleton variant='rounded' width={280} height={120} />
                    <Skeleton variant='rounded' width={280} height={120} />
                    <Skeleton variant='rounded' width={280} height={120} />
                    <Skeleton variant='rounded' width={280} height={120} />
                    <Skeleton variant='rounded' width={280} height={120} />
                    <Skeleton variant='rounded' width={280} height={120} />
                    <Skeleton variant='rounded' width={280} height={120} />
                    <Skeleton variant='rounded' width={280} height={120} />
                    <Skeleton variant='rounded' width={280} height={120} />
                    <Skeleton variant='rounded' width={280} height={120} />
                    <Skeleton variant='rounded' width={280} height={120} />
                    <Skeleton variant='rounded' width={280} height={120} />
                </div>
            </div>
        </>
    )
}

export default IncidencesSkeleton
