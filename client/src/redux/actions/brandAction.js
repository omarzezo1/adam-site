import baseURL from '../../api/baseURL'
import {GET_ALL_BRAND, CREATE_BRAND, DELETE_BRAND} from '../types'

export const getAllBrands = ()=> async(dispatch)=>{
    try{
        const res = await baseURL.get('/api/v1/brands')
        dispatch({type: GET_ALL_BRAND, payload: res})
    }catch(e){
        dispatch({type: GET_ALL_BRAND, payload: e.response})
    }
}

export const createBrand = (formData)=> async(dispatch)=>{
    try{
        const config = {
            headers:{"Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("token")}`}
        }
        const res = await baseURL.post('/api/v1/brands', formData, config)
        dispatch({type: CREATE_BRAND, payload: res.data})
    }catch(e){
        dispatch({type: CREATE_BRAND, payload: e.response})
    }
}

export const deleteBrand = (id)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
        }
        const res = await baseURL.delete(`/api/v1/brands/${id}`, config)
        dispatch({type: DELETE_BRAND, payload: res.data})
    }catch(e){
        dispatch({type: DELETE_BRAND, payload: e.response})
    }
}