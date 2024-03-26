import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProductApi from '../api/products.api'
import useBasket from '../hooks/basket.hook'


function Item() {
    const { id } = useParams()
    const productApi = useProductApi()

    const Basket = useBasket()

    const [item, setItem] = useState(null)

    useEffect(() => {
        const load = async () => setItem(await productApi.get(id))

        load()
    }, [])

    return (
        <div>
            <h1>{item?.title}</h1>
            <p>{item?.desc}</p>

            <button onClick={() => Basket.add(id, 1)}>Add to Basket</button>
            <button onClick={() => window.history.back()}>Back</button>
        </div>
    )
}

export default Item