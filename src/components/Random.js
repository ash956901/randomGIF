import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./spinner";
import useGif from "../hooks/useGif";
export default function Random(){
  
 
  const {gif,loading,fetchData}=useGif();

  function clickHandler(){
    fetchData();
  }

  return (
    <div className="flex flex-col items-center gap-y-5 mt-[15px] w-1/2  bg-green-500 rounded-lg border-black ">
      
      <h1 className="mt-[15px] underline text-2xl upercase font-bold">A Random Gif</h1>
      
      {
        loading?(<Spinner/>):( <img alt="loading..." src={gif} width="300"/>)
      }
     
      
      <button className="w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg" onClick={clickHandler}>Generate</button>
    
    </div>
  );
}