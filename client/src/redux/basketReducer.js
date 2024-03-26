import { LOGIN, LOGOUT } from './types/auth.types'

const initialState = []

export default function basketReducer(state=initialState, action) {
    switch(action.type) {
    case LOGIN:
        return {...action.payload}
    case LOGOUT:
        return {...initialState}
    default:
        return state
    }
}