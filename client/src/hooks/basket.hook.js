import { useDispatch } from 'react-redux'

import * as basket from '../redux/actions/basket.action'


export default function useBasket() {
    const dispath = useDispatch()

    const add = (id, count) => { dispath(basket.addProduct(id, count)) }
    const remove = (id) => { dispath(basket.removeProduct(id)) }
    const del = (id) => { dispath(basket.deleteProduct(id)) }
    const clear = () => { dispath(basket.clear()) }

    return { add, remove, delete: del, clear }
}