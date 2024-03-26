import useApi from '../hooks/api.hook'


export default function useProductApi() {
    const { publicRequest, protectedRequest } = useApi()


    const categories = async (email, password) => {
       try { return await publicRequest('api/product/categories') }
        catch(error) { return [] } 
    } 

    const products = async (categoryId) => {
        try { return await publicRequest('api/product/products', {categoryId}) }
        catch(error) { return [] } 
    } 

    // admin
    const create = async (type, title, desc, data) => {
        try { return await publicRequest('api/product/create', {type, title, desc, data}) }
        catch(error) { return null } 
    } 

    const list = async (type) => {
        try { return await publicRequest('api/product/list', {type}) }
        catch(error) { return [] } 
    } 

    const get = async (id) => {
        try { return await publicRequest('api/product/get', {id}) }
        catch(error) { return null } 
    } 

    return { 
        categories,
        products,
        create,
        list,
        get
    }
}