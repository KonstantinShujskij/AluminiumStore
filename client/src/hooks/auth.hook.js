import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as auth from '../redux/actions/auth.actions'
import * as authSelectors from '../redux/selectors/auth.selectors'
import * as userSelectors from '../redux/selectors/user.selectors'


export default function useAuth() {
    const dispath = useDispatch()

    const token = useSelector(authSelectors.token)
    const isAdmin = useSelector(authSelectors.isAdmin)
    const isUserLoad = useSelector(userSelectors.isUserLoad)
    
    useEffect(() => { 
        if(token) { 
            if(isAdmin) {}
            
            if(!isAdmin) {}
        }
        if(!token) { }
    }, [token, isUserLoad, isAdmin])

    const login = (userToken, userId, isAdmin=false) => { dispath(auth.login(userToken, userId, isAdmin)) }
    const logout = () => { dispath(auth.logout()) }

    return { login, logout }
}