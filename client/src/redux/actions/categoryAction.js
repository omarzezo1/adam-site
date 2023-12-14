import baseURL from '../../api/baseURL'
import {GET_ALL_CATEGORY, CREATE_CATEGORY, SINGLE_CATEGORY, DELETE_CATEGORY} from '../types'

export const getAllCategory = ()=> async(dispatch)=>{
    try{
        const res = await baseURL.get('/api/v1/categories')
        dispatch({type: GET_ALL_CATEGORY, payload: res.data})
    }catch(e){
        dispatch({type: GET_ALL_CATEGORY, payload: e.response})
    }
}

export const createCategory = (formData)=> async(dispatch)=>{
    try{
        const config = {
            headers:{"Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.post('/api/v1/categories', formData, config)
        dispatch({type: CREATE_CATEGORY, payload: res.data})
    }catch(e){
        dispatch({type: CREATE_CATEGORY, payload: e.response})
    }
}

export const getSingleCategory = (id)=> async(dispatch)=>{
    try{
        const res = await baseURL.get(`/api/v1/categories/${id}`)
        dispatch({type: SINGLE_CATEGORY, payload: res.data})
    }catch(e){
        dispatch({type: SINGLE_CATEGORY, payload: e.response})
    }
}

export const deleteCategory = (id)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.delete(`/api/v1/categories/${id}`, config)
        dispatch({type: DELETE_CATEGORY, payload: res.data})
    }catch(e){
        dispatch({type: DELETE_CATEGORY, payload: e.response})
    }
}