import baseURL from "../../api/baseURL"
import {ADD_TO_CART, GET_CART_ITEMS, UPDATE_QTY, APPLY_COUPON, DELETE_CART_ITEMS} from "../types"


export const addToCart = (data)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.post("/api/v1/cart", data, config)
        dispatch({type: ADD_TO_CART, payload: res.data})
    }catch(e){
        dispatch({type: ADD_TO_CART, payload: e.response})
    }
}


export const getCartItems = ()=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.get("/api/v1/cart", config)
        dispatch({type: GET_CART_ITEMS, payload: res.data})
    }catch(e){
        dispatch({type: GET_CART_ITEMS, payload: e.response})
    }
}


export const deleteCartItem = (id)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.delete(`/api/v1/cart/${id}`, config)
        dispatch({type: DELETE_CART_ITEMS, payload: res.data})
    }catch(e){
        dispatch({type: DELETE_CART_ITEMS, payload: e.response})
    }
}

export const updateQty = (id, data)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.put(`/api/v1/cart/${id}`, data, config)
        dispatch({type: UPDATE_QTY, payload: res.data})
    }catch(e){
        dispatch({type: UPDATE_QTY, payload: e.response})
    }
}

export const applyCoupon = (data)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.put(`/api/v1/cart/applyCoupon`, data, config)
        dispatch({type: APPLY_COUPON, payload: res.data})
    }catch(e){
        dispatch({type: APPLY_COUPON, payload: e.response})
    }
}