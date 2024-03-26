import React from 'react'
import * as basket from '../redux/selectors/basket.selectors'
import { useSelector } from 'react-redux'


function Basket() {
    const list = useSelector(basket.list)

    return (
        <div>
            <div>Basket</div>

            {list.map((item) => <div key={item.id}>
                <div>{item?.id}</div>
                <div>{item?.count}</div>
            </div>)}
        </div>
    )
}

export default Basket