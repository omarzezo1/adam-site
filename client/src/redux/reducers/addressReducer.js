import {ADD_ADDRESS, GET_ALL_ADDRESS, DELETE_ADDRESS, GET_SPECIFIC_ADDRESS} from '../types'

const initState = {
    address: [],
    allAddress: [],
    deletedAddress: [],
    specificAddress: []
}

const addressReducer = (state = initState, action)=>{
    switch(action.type)
    {
        case ADD_ADDRESS:
            return {address: action.payload}
        case GET_ALL_ADDRESS:
            return {allAddress: action.payload}  
        case DELETE_ADDRESS:
            return {deletedAddress: action.payload}
        case GET_SPECIFIC_ADDRESS:
            return {specificAddress: action.payload}          
        default:
            return state    
    }
}

export default addressReducer;