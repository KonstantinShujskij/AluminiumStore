import { ADD, REMOVE, DELETE, CLEAR } from '../types/basket.types'

export function addProduct(id, count) {
    return {
        type: ADD,
        payload: { id, count }
    }
}

export function removeProduct(id) {
    return {
        type: REMOVE,
        payload: id
    }
}

export function deleteProduct(id) {
    return {
        type: DELETE,
        payload: id
    }
}

export function clear() {
    return {
        type: CLEAR
    }
}