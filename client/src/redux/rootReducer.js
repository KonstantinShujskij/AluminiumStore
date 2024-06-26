import { combineReducers } from 'redux'
import authRuducer from './authRuducer'
import userReducer from './userReducer'
import alertReducer from './alertRuducer'
import basketReducer from './basketReducer'


const rootReducer = combineReducers({
    auth: authRuducer,
    user: userReducer,
    basket: basketReducer,

    alert: alertReducer
})


export default rootReducer