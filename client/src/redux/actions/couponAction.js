import baseURL from '../../api/baseURL'
import {CREATE_COUPON, GET_ALL_COUPONS, DELETE_COUPON} from '../types'

export const createCoupon = (data)=> async(dispatch)=>{
    try{
        const config = {headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}}
        const res = await baseURL.post('/api/v1/coupons', data, config)
        dispatch({type: CREATE_COUPON, payload: res})
    }catch(e){
        dispatch({type: CREATE_COUPON, payload: e.response})
    }
}

export const getAllCoupons = ()=> async(dispatch)=>{
    try{
        const config = {headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}}
        const res = await baseURL.get('/api/v1/coupons', config)
        dispatch({type: GET_ALL_COUPONS, payload: res})
    }catch(e){
        dispatch({type: GET_ALL_COUPONS, payload: e.response})

    }
}

export const deleteCoupon = (id)=> async(dispatch)=>{
    try{
        const config = {headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}}
        const res = await baseURL.delete(`/api/v1/coupons/${id}`, config)
        dispatch({type: DELETE_COUPON, payload: res})
    }catch(e){
        dispatch({type: DELETE_COUPON, payload: e.response})

    }
}