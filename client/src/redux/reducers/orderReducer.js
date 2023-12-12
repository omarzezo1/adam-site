import {CREATE_CASH_ORDER, GET_ALL_ORDERS, GET_SPECIFIC_ORDER} from '../types'

const initState = {
    cashOrder: [],
    specificOrder: []
}


const orderReducer = (state = initState, action)=>{
    switch(action.type)
    {
        case CREATE_CASH_ORDER:
            return {cashOrder: action.payload}
        case GET_ALL_ORDERS:
            return {orders: action.payload}  
        case GET_SPECIFIC_ORDER:
            return {specificOrder: action.payload}      
        default:
            return state    
    }
}

export default orderReducer;