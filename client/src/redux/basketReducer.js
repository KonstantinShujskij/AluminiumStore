import { ADD, REMOVE, DELETE, CLEAR } from './types/basket.types'

const initialState = []

export default function basketReducer(state=initialState, action) {
    switch(action.type) {
    case ADD:
        const product = state.filter((item) => (item.id === action.payload.id))
        if (product.length === 0) { return [...state, action.payload] }

        return state.map((item) => {
            if(item.id !== action.payload.id) { return item }
            return {...item, count: item.count + action.payload.count}
        })
    default:
        return state
    }
}