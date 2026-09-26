
"use client"
// export default Myplanpage;
import Link from "next/link";
// import React from "react";
import React, { useContext } from 'react';
import { CardContext } from '@/context/cardContext';
// import {CardProvider} from "@/context/cardContext"
import TodayCard from "@/component/btns/todayCard";
import CounterCard from "@/component/cards/counterCard";
import { toast } from 'react-toastify';
import SaveCard from "@/component/btns/saveCard"


const Page = () => {

  const{todayCard,setTodayCard,saveCard,setSaveCard}=useContext(CardContext)

const handleRemoveToday = (id) => {
  const updatedCard = todayCard.filter((item) => item.id !== id);
  setTodayCard(updatedCard);
   toast.warning("workout removed")
};
const handleRemoveSaved = (id) => {
  const updatedCard = saveCard.filter((item) => item.id !== id);

  setSaveCard(updatedCard);

  toast.warning("Workout removed from saved");
};




  return (
    <div className="container mx-auto m-15">
      <h1 className="text-5xl font-bold">My plan</h1>
      <p className="text-2xl text-gray-500">cap of five lift of today.Finish them and load more.</p>
      {/* counterCard   part  */}
      <CounterCard></CounterCard>


      {/* name of each tab group should be unique */}
      {/*  tab bar */}
<div className="tabs tabs-border">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Today's Plan" />
  <div className="tab-content border-base-300 bg-base-100 p-10">




    {todayCard.length>0 ?   todayCard.map((elm,idx)=><TodayCard key={idx} elm={elm}   onRemove={handleRemoveToday}></TodayCard>):(
      //fallback
      <div>
        <p>Nothing here Today</p>
        <p>Browse the library & add a workout</p>
          <Link
          href={`/workout`}
          className="flex flex-1 items-center justify-center rounded-lg border border-zinc-700 px-4 py-2 text-xs font-bold hover:bg-zinc-800 sm:flex-none"
        >
          Go to workout
        </Link>
      </div>
    )}
  </div>



  <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved" defaultChecked />
  <div className="tab-content border-base-300 bg-base-100 p-10">




    {saveCard.length>0 ?  saveCard.map((elm,idx)=><SaveCard key={idx} elm={elm}   onRemove={handleRemoveSaved}></SaveCard>):(
      //fallback
      <div>
        <p>Nothing here saved</p>
        <p>Browse the library & add a workout</p>
          <Link
          href={`/workout`}
          className="flex flex-1 items-center justify-center rounded-lg border border-zinc-700 px-4 py-2 text-xs font-bold hover:bg-zinc-800 sm:flex-none"
        >
          Go to workout
        </Link>
      </div>
    )}




  </div>
</div>
    </div>
   
  );
};

export default Page;