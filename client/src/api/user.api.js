import useApi from '../hooks/api.hook'


export default function useUserApi() {
    const { publicRequest, protectedRequest } = useApi()


    const signup = async (email, password) => {
       try { return await publicRequest('api/user/signup', {email, password}) }
        catch(error) { return null } 
    } 

    const login = async (email, password) => {
        try { return await publicRequest('api/user/login', {email, password}) }
        catch(error) { return null } 
    } 

    const load = async () => {
        try { return await protectedRequest('api/user/load') }
        catch(error) { return null } 
    }


    return { 
        signup,
        login,
        load
    }
}