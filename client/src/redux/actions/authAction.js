import {CREATE_USER, LOGIN_USER, GET_ME, LOGME_OUT, SEND_CODE} from '../types'
import baseURL from '../../api/baseURL'

export const createUser = (data)=> async(dispatch)=>{
    try{
        const res = await baseURL.post('/api/v1/auth/signup', data)
        dispatch({type: CREATE_USER, payload: res})
    }catch(e){
        dispatch({type: CREATE_USER, payload: e.response})
    }
}

export const loginUser = (loginData)=> async(dispatch)=>{
    try{
        const res = await baseURL.post('/api/v1/auth/login', loginData)
        dispatch({type: LOGIN_USER, payload: res})
    }catch(e){
        dispatch({type: LOGIN_USER, payload: e.response})
    }
}

export const getLoggedUser = ()=> async(dispatch)=>{
    try{
        const  config = {headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}}
        const res = await baseURL.get('/api/v1/users/getMe', config)
        dispatch({type: GET_ME, payload: res})
    }catch(e){
        dispatch({type: GET_ME, payload: e.response})
    }
}

export const userLogout = ()=> async(dispatch)=>{
    try{
        const  config = {headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}}
        const res = await baseURL.delete('/api/v1/users/deleteMe', config)
        dispatch({type: LOGME_OUT, payload: res})
    }catch(e){
        dispatch({type: LOGME_OUT, payload: e.response})
    }
}

export const getResetCode = (data)=> async(dispatch)=>{
    try{
        const res = await baseURL.post('/api/v1/auth/forgotPasswords', data)
        dispatch({type: SEND_CODE, payload: res})
    }catch(e){
        dispatch({type: SEND_CODE, payload: e.response})
    }
}