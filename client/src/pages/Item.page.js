import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProductApi from '../api/products.api'


function Item() {
    const { id } = useParams()
    const productApi = useProductApi()

    const [item, setItem] = useState(null)

    useEffect(() => {
        const load = async () => setItem(await productApi.get(id))

        load()
    }, [])

    return (
        <div>
            <h1>{item?.title}</h1>
            <p>{item?.desc}</p>

            <button onClick={() => window.history.back()}>Back</button>
        </div>
    )
}

export default Item