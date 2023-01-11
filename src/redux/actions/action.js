import {INCRE,DECRE,FETCH_DATA} from '../Constants';

export const increment=(data)=>{
    return (dispatch)=>dispatch({
        type:INCRE,
        payload:data
    })
}

export const decrement=(data)=>{
    return (dispatch)=>dispatch({
        type:DECRE,
        payload:data
    })
}

export const fetchDataAction=(data)=>{
    return (dispatch)=>dispatch({
        type:FETCH_DATA,
        payload:data
    })
}