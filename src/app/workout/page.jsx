// import Banner from '@/component/hompage/banner';
import Hero from '@/component/hompage/hero';
import React from 'react';
import HomeCard from '@/component/cards/homeCard';


const getInfo = async()=>{
    const res=await fetch(" https://api.abcz.workers.dev/api/fitlog");
    const data=await res.json()
    return data
}

const page = async () => {
     const arrInfo=await getInfo()
    return (
        <>
       <div className="container mx-auto mt-10">
        <Hero></Hero>
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
               <h1 className="text-6xl font-bold">The Library</h1>
            <p className="text-3xl text-gray-500">Tweleve lift covering every major muscle group</p>
        </div>
        <div    className="container mx-auto my-[70px] grid grid-cols-3 gap-3">
          {arrInfo.map((elm,idx)=><HomeCard   elm={elm} key={idx}></HomeCard>)}
        </div>
        </div>
        </>
       
    );
};

export default page;