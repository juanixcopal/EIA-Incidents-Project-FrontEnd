import React from 'react'
import { Skeleton } from '@mui/material'
const IncidencesSkeleton = () => {
    return (
        <div style={{ width: '99%' }}>
            <div className='row text-center' style={{ placeContent: 'center' }}>
                <Skeleton variant='rounded' width={355} height={50} style={{ borderRadius: '50px' }} />
            </div>
            <div className='MapClass'>
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
    )
}

export default IncidencesSkeleton
