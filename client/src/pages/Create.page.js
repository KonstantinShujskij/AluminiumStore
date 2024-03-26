import React, { useState } from 'react'
import useInput from '../hooks/input.hook'
import { useParams } from 'react-router-dom'
import useProductApi from '../api/products.api'
import useAlert from '../hooks/alert.hook'
import { usePages } from '../products/products.agregate'


function Create() {
    const { id } = useParams()

    const productApi = useProductApi()
    const Alert = useAlert()

    const title = useInput()
    const desc = useInput()

    const [data, setData] = useState({}) 

    const createHandler = async () => {
        const product = await productApi.create(id, title.value, desc.value, data)
        console.log(product);

        if(product) { 
            Alert.pushMess("Продукт успешно создан") 
            window.history.back()
        }
    }

    const Product = usePages(id)

    return (
        <div>
            <div>Create</div>
            <div>
                <input {...title.bind} placeholder='title'/>
                <textarea {...desc.bind} placeholder='Description' />
            </div>
                
            <Product setData={(data) => setData((prew) => ({...prew, ...data}))} />

            <hr />

            <button onClick={() => createHandler()}>Create</button>
            <button onClick={() => window.history.back()}>Back</button>
        </div>
    )
}

export default Create