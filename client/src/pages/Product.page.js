import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useProductApi from '../api/products.api'
import Item from '../components/Item'


function Product() {
  const { id } = useParams()
  const productApi = useProductApi()

  const [items, setItems] = useState([]) 

  useEffect(() => {
    const load = async () => setItems(await productApi.list(id))

    load()
  }, [])

  return (
    <>
      {items.map((item) => <Item item={item} key={item._id} />)}
      <div>
        <Link to={`/create/${id}`}>Create</Link>
      </div>

      <button onClick={() => window.history.back()}>Back</button>
    </>
    
  )
}

export default Product