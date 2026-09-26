"use client"
import React, { useContext } from "react";
import { CardContext } from '@/context/cardContext';
import {CardProvider} from "@/context/cardContext"


const PlanBtn = () => {

     const{todayCard}=useContext(CardContext)
    return (
        <div>
  <button className="font-medium">
            Plan <span className="ml-1 text-gray-500  text-green-600">{todayCard.length}</span>
          </button>
        </div>
    );
};

export default PlanBtn;