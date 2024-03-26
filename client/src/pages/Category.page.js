import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProductApi from '../api/products.api'
import Product from '../components/Product'

function Category() {
    let { id } = useParams();

    const productApi = useProductApi()

    const [products, setProducts] = useState([]) 

    useEffect(() => {
        const load = async () => { setProducts(await productApi.products(id)) }

        load()
    }, [])


    return (
        <div className='main'>
            {products.map((product) => <Product {...product} key={product.id} />)}
        </div>
    )
}

export default Category