import baseURL from '../../api/baseURL'
import {ADD_TO_WISHLIST, GET_ALL_WISHLIST, DELETE_FROM_WISHLIST} from '../types'

export const addToWishlist  = (data)=> async(dispatch)=>{
    try{
        const config = {headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}}
        const res = await baseURL.post('/api/v1/wishlist', data, config)
        dispatch({type: ADD_TO_WISHLIST, payload: res.data})
    }catch(e){
        dispatch({type: ADD_TO_WISHLIST, payload: e.response})
    }
}


export const removeProductFromWishlist  = (id)=> async(dispatch)=>{
    try{
        const config = {headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}}
        const res = await baseURL.delete(`/api/v1/wishlist/${id}`, config)
        dispatch({type: DELETE_FROM_WISHLIST, payload: res.data})
    }catch(e){
        dispatch({type: DELETE_FROM_WISHLIST, payload: e.response})
    }
}


export const getLoggedUserWishlist  = ()=> async(dispatch)=>{
    try{
        const config = {headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}}
        const res = await baseURL.get('/api/v1/wishlist', config)
        dispatch({type: GET_ALL_WISHLIST, payload: res.data})
    }catch(e){
        dispatch({type: GET_ALL_WISHLIST, payload: e.response})
    }
}