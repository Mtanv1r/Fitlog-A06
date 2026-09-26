

"use client"
import { CardContext } from '@/context/cardContext';
// import React from 'react';
import React, { useContext } from "react";
import { toast } from 'react-toastify';

const TodayBtn = ({NthInfo}) => {



    const {  todayCard, setTodayCard}=useContext(CardContext)
    const clicker=()=>{
        setTodayCard([...todayCard,NthInfo]);
        toast.success(`you have added ${NthInfo.name}`)
    }



    return (
        <div>
             <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-bold uppercase text-black transition hover:bg-zinc-200"  onClick={clicker}>
              <span>＋</span>
              Add to todays plan
            </button>
        </div>
    );
};

export default TodayBtn;