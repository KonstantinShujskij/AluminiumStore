import React from 'react'
import useInput from '../../hooks/input.hook'


function Profile({setData}) {
    const radius = useInput(0, (value) => setData({ radius: value }))
    const depth = useInput(0, (value) => setData({ depth: value }))

    return (
        <>
        <div>
            <input {...radius.bind} placeholder='Radius' />
        </div>  
        <div>
            <input {...depth.bind} placeholder='Depth' />
        </div>
        </>
    )
}

export default Profile