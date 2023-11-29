import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./spinner";
import useGif from "../hooks/useGif";
export default function Tag(){
  

  const [tag,setTag]=useState('');

  const {gif,loading,fetchData}=useGif(tag);

  function clickHandler(){
    fetchData(tag);
  }


  function changeHandler(event){
    setTag(event.target.value);
  }
   

  return (
    <div className="flex flex-col items-center gap-y-5 mt-[15px] w-1/2  bg-blue-500 rounded-lg border-black ">
      
      <h1 className="mt-[15px] px-4 md:px-0 underline sm:text-2xl  text-md upercase font-bold">Random {tag} Gif</h1>
      
      {
        loading?(<Spinner/>):( <img alt="loading..." src={gif} width="300"/>)
      }
     
      <input onChange={changeHandler} value={tag} className="w-10/12 text-lg py-2 rounded-lg mb-[2px] text-center"/>
      
      <button className="w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg" onClick={clickHandler}>Generate</button>
    
    </div>
  );
}