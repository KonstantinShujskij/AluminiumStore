import React from 'react'
import useInput from '../../hooks/input.hook'


function Corner({setData}) {
    const width = useInput(0, (value) => setData({ width: value }))
    const height = useInput(0, (value) => setData({ height: value }))
    const depth = useInput(0, (value) => setData({ depth: value }))

    return (
        <>
        <div>
            <input {...width.bind} placeholder='Width' />
        </div>  
        <div>
            <input {...height.bind} placeholder='Heigth' />
        </div>
        <div>
            <input {...depth.bind} placeholder='Depth' />
        </div>
        </>
    )
}

export default Corner