import baseURL from '../../api/baseURL'
import {CREATE_SIZE} from '../types'

export const createSize = ()=> async(dispatch)=>{
    try{
        const config = {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}}
        const res = await baseURL.post('')
    }catch(e){

    }
}