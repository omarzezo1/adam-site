import baseURL from "../../api/baseURL";
import { ADD_ADDRESS, GET_ALL_ADDRESS, DELETE_ADDRESS, GET_SPECIFIC_ADDRESS } from "../types";

export const addAddress = (data)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.post("/api/v1/addresses", data, config)
        dispatch({type: ADD_ADDRESS, payload: res.data})
    }catch(e){
        dispatch({type: ADD_ADDRESS, payload: e.response})

    }
}

export const getAllAddAddress = ()=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.get("/api/v1/addresses", config)
        dispatch({type: GET_ALL_ADDRESS, payload: res.data})
    }catch(e){
        dispatch({type: GET_ALL_ADDRESS, payload: e.response})

    }
}

export const getSpecificAddress = (id)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.get(`/api/v1/addresses/${id}`, config)
        dispatch({type: GET_SPECIFIC_ADDRESS, payload: res.data})        
    }catch(e){
        dispatch({type: GET_SPECIFIC_ADDRESS, payload: e.response})        
    }
}

export const removeAddress = (id)=> async(dispatch)=>{
    try{
        const config = {
            headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}
        }
        const res = await baseURL.delete(`/api/v1/addresses/${id}`, config)
        dispatch({type: DELETE_ADDRESS, payload: res.data})
    }catch(e){
        dispatch({type: DELETE_ADDRESS, payload: e.response})

    }
}