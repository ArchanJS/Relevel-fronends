import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// https://pokeapi.co/api/v2/pokemon/bulbasaur
const Poke = () => {
  const {pokename}=useParams();
  const [details,setDetails]=useState();
  const getData=async()=>{
    try {
      const {data}=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
      console.log(data);
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    // getData()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`).then(({data})=>{
      setDetails(data);
    console.log(data)
    })
    .catch((err)=>console.log(err));
  },[])
  console.log(pokename);
  return (
    <>
    {pokename}
    {
      details
      ?
      <>
      <hr/>
    height: {details&&details.height}
    <hr/>
    weight: {details&&details.weight}
    <hr/>
    abilities: {details&&details.abilities.length}
    <hr/>
    moves: {details&&details.moves.length}
    <hr/>
      </>
      :
      <>
      <hr/>
      ...loading
      </>
    }
    </>
  )
}

export default Poke