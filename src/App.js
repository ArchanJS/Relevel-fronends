import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from './redux/actions/actioncreators';
import {fetchLimitedData} from './functions/functions';

const App = () => {
  const [limit,setLimit]=useState('');
  const amount=useSelector(state=>state.result);
  const pokeData=useSelector(state=>state.pokeData);
  // const dataResult=useSelector(state=>state.dataResult);
  const dispatch=useDispatch();
  const {increment,decrement,fetchDataAction}=bindActionCreators(actionCreators,dispatch);
  const handleFetch=async()=>{
    const res=await fetchLimitedData(limit);
    fetchDataAction(res);
  }
  console.log(amount);
  return (
    <>
    <div>
      {/* <p>{amount}</p>
      <button  onClick={()=>increment(100)}>Credit</button>
      <button  onClick={()=>decrement(100)}>Debit</button> */}
      <input value={limit} onChange={(e)=>setLimit(e.target.value)}  />
      <button onClick={handleFetch}>Fetch</button>
      {
        pokeData.length>0
        &&
        pokeData.map((e)=>{
          return (
            <>
            <hr/>
            {e.name}
            </>
          )
        })
      }
    </div>
    </>
  )
}

export default App


// let arr=[2,2,4,6,8];
// let checkOdd=(arr)=>{
//     let n=arr.length,sum=0,f=false;
//     for(let i=0;i<n;i++){
//         sum+=arr[i];
//         if(arr[i]%2!==0) f=true;
//     }
//     if(sum%2!==0) return 0;
//     else if(f===true) return 1;
//     arr=arr.map((e)=>parseInt(e/2)); //[1,1,2,3,4]
//     return 1+checkOdd(arr);
// }

// console.log(checkOdd(arr));