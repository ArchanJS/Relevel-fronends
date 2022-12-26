import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [limit,setLimit]=useState("");
    const [pokes,setPokes]=useState([]);
    const navigate=useNavigate();
    const clickHandler=async()=>{
        try {
            const {data}=await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
            setPokes(data.results);
            setLimit("");
        } catch (error) {
            console.log(error);
        }
    }

    const navigateToChild=(pokename)=>{
        navigate(`/${pokename}`);
    }
  return (
    <>
    <input value={limit} onChange={(e)=>setLimit(parseInt(e.target.value))} />
    <button onClick={clickHandler}>Click</button>
    <br/>
    {
        pokes.length>0
        &&
        pokes.map((e,i)=>{
            return(
                <>
                {e.name}
                <button onClick={()=>{
                    navigateToChild(e.name);
                }} >check</button>
                <br/>
                </>
            )
        })
    }
    </>
  )
}

export default Home