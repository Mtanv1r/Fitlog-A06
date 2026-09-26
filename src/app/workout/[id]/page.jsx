// import { name } from 'next/dist/server/ci-info';
import DetailCard from '@/component/cards/detailCard';
import React from 'react';


//data fecthing 
const getInfo = async()=>{
    // const res=await fetch("https://api.abcz.workers.dev/api/fitlog");
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data=await res.json()
    return data
}





const WorkOutDetailPage = async ({params}) => {

    const {id}= await params
    const arrInfo=await getInfo()

    //nth info array
    const NthInfo=arrInfo.find((elm)=>String(elm.id)===String(id))

    return (
        <div   className="container mx-auto my-auto">
            <DetailCard NthInfo={NthInfo}></DetailCard>
        </div>
    );
};

export default WorkOutDetailPage;