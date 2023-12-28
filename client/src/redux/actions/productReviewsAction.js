import baseURL from '../../api/baseURL'
import {GET_ALL_PRODUCT_REVIEWS, CREATE_REVIEW} from '../types'


export const createProductReview = (id, data)=> async(dispatch)=>{
    try{
        const config = {headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}}
        const res = await baseURL.post(`/api/v1/products/${id}/reviews`, data, config)
        dispatch({type: CREATE_REVIEW, payload: res})
    }catch(e){
        dispatch({type: CREATE_REVIEW, payload: e.response})
    }
}

export const getAllProductReviews = (id)=> async(dispatch)=>{
    try{
        const res = await baseURL.get(`/api/v1/products/${id}/reviews`)
        dispatch({type: GET_ALL_PRODUCT_REVIEWS, payload: res})
    }catch(e){
        dispatch({type: GET_ALL_PRODUCT_REVIEWS, payload: e.response})
    }
}