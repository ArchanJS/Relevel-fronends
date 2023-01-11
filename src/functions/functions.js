import axios from "axios";

export const fetchLimitedData=async(limit)=>{
    try {
        const {data}=await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
        console.log(data);
        return data.results;
    } catch (error) {
        console.log(error);
        return [];
    }
}