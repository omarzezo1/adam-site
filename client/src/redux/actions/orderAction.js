import baseURL from '../../api/baseURL'
import {CREATE_CASH_ORDER, GET_ALL_ORDERS, GET_SPECIFIC_ORDER} from '../types'


export const createCashOrder = (id, data)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.post(`/api/v1/orders/${id}`, data, config)
        dispatch({type: CREATE_CASH_ORDER, payload: res})
    }catch(e){
        dispatch({type: CREATE_CASH_ORDER, payload: e.response})
    }
}

export const getAllOrders = ()=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.get("/api/v1/orders", config)
        dispatch({type: GET_ALL_ORDERS, payload: res})
    }catch(e){
        dispatch({type: GET_ALL_ORDERS, payload: e.response})
    }
}

export const getSpecificOrder = (id)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.get(`/api/v1/orders/${id}`, config)
        dispatch({type: GET_SPECIFIC_ORDER, payload: res})
    }catch(e){
        dispatch({type: GET_SPECIFIC_ORDER, payload: e.response})
    }
}