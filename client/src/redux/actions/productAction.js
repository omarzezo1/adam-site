import baseURL from '../../api/baseURL'
import {CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, SINGLE_PRODUCT, EDIT_PRODUCT} from '../types'

export const createProduct = (formData)=> async(dispatch)=>{
    try{
        const config = {
            headers:{"Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.post('/api/v1/products', formData, config)
        dispatch({type: CREATE_PRODUCT, payload: res})
    }catch(e){
        dispatch({type: CREATE_PRODUCT, payload: e.response})
    }
}


export const editProduct = (formData, id)=> async(dispatch)=>{
    try{
        const config = {
            headers:{"Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.put(`/api/v1/products/${id}`, formData, config)
        dispatch({type: EDIT_PRODUCT, payload: res})
    }catch(e){
        dispatch({type: EDIT_PRODUCT, payload: e.response})
    }
}


export const getAllProducts = ()=> async(dispatch)=>{
    try{
        const res = await baseURL.get('/api/v1/products')
        dispatch({type: GET_ALL_PRODUCTS, payload: res})
    }catch(e){
        dispatch({type: GET_ALL_PRODUCTS, payload: e.data})
    }
}

export const getSingleProduct = (id)=> async(dispatch)=>{
    try{
        const res = await baseURL.get(`/api/v1/products/${id}`)
        dispatch({type: SINGLE_PRODUCT, payload: res.data})
    }catch(e){
        dispatch({type: SINGLE_PRODUCT, payload: e.data})
    }
}

export const deleteProduct = (id)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.delete(`/api/v1/products/${id}`, config)
        dispatch({type: DELETE_PRODUCT, payload: res})
    }catch(e){
        dispatch({type: DELETE_PRODUCT, payload: e.response})
    }
}