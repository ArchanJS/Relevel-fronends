import {INCRE,DECRE,FETCH_DATA} from '../Constants';

export const numberReducer=(state=0,action)=>{
    switch(action.type){
        case INCRE:
            return state+action.payload;
        case DECRE:
            return state-action.payload;
        default:
            return state;
    }
}

export const dataReducer=(state=[],action)=>{
    switch(action.type){
        case FETCH_DATA:
            return [...action.payload];
        default:
            return state;
    }
}