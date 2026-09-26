import JsxPragma from 'next/dist/build/babel/plugins/jsx-pragma';
import React from 'react';

import HomeCard from '../cards/homeCard';



// data fetching part
const getInfo = async()=>{
    const res=await fetch(" https://api.abcz.workers.dev/api/fitlog");
    const data=await res.json()
    return data
}


const liberio = async () => {
    const arrInfo=await getInfo()
    return (
        <>
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
               <h1 className="text-6xl font-bold">The Library</h1>
            <p className="text-3xl text-gray-500">Tweleve lift covering every major muscle group</p>
        </div>
        <div    className="container mx-auto my-[70px] grid grid-cols-3 gap-3">
          {arrInfo.map((elm,idx)=><HomeCard   elm={elm} key={idx}></HomeCard>)}
        </div>
        </>
       
    );
};

export default liberio;