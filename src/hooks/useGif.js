import { useState,useEffect } from "react";
import axios from "axios";
const url=`https://api.giphy.com/v1/gifs/random?api_key=mhms5acZFbwGhab5Nk2NcMJkLMO8WAkV`;

export default function useGif(tag){
        
  const [gif,setGif]=useState('');
  const [loading,setLoading]=useState(false);


  async function fetchData(tag){
    setLoading(true);
    const {data} =await axios.get(tag?(`${url}&tag=${tag}`):(url));
    const imageSource=data.data.images.downsized_medium.url;
    setGif(imageSource);
    console.log(data);
    setLoading(false);
  }


  useEffect(()=>{
    fetchData(tag);
  },[]);

  return {gif,loading,fetchData};
}