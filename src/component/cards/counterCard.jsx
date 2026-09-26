"use client"
import React, { useContext } from 'react';
import { CardContext } from '@/context/cardContext';
import {CardProvider} from "@/context/cardContext"


const CounterCard = () => {

  const{todayCard}=useContext(CardContext)


  // total calories
  const totalCalories= todayCard.reduce((acc,crr)=>acc+crr.caloriesBurned,0)
  //total time 
  const totalTime=todayCard.reduce((acc,crr)=>acc+crr.duration,0)


    return (
        <div>
                <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white sm:grid-cols-3">

      {/* Exercises */}
      <div className="border-b border-zinc-800 p-6 text-center sm:border-b-0 sm:border-r">
        <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Exercises
        </p>

        <p className="mt-2 text-3xl font-bold">
          {todayCard.length}
        </p>
      </div>

      {/* Calories */}
      <div className="border-b border-zinc-800 p-6 text-center sm:border-b-0 sm:border-r">
        <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Calories
        </p>

        <p className="mt-2 text-3xl font-bold">
          {totalCalories}
        </p>
      </div>

      {/* Minutes */}
      <div className="p-6 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Minutes
        </p>

        <p className="mt-2 text-3xl font-bold">
          {totalTime}
        </p>
      </div>

    </div>
        </div>
    );
};

export default CounterCard;