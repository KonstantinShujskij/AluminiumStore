import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import Category from '../components/Category'
import useProductApi from '../api/products.api'


function Main() {
  const productApi = useProductApi()

  const [categories, setCategories] = useState([]) 

  useEffect(() => {
    const load = async () => { 
      const l = await productApi.categories()
      console.log(l);
      setCategories(l) 
    }

    load()
  }, [])

  return (
    <div className='main'>
      {categories.map((category) => <Category {...category} key={category.id} />)}
    </div>
  )
}

export default Main