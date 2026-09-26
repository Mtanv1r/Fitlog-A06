


import Link from 'next/link';
// import React from "react";
import React, { useContext } from "react";
import { CardContext } from '@/context/cardContext';
import {CardProvider} from "@/context/cardContext"
import PlanBtn from '../btns/navbtns/planBtn';
import SaveBtn from '../btns/navbtns/saveBtn';


const Navbar = () => {

  // const{todayCard}=useContext(CardContext)

  return (
    <nav className="w-full border-b bg-gray-900">
      <div className="mx-auto flex h-16 items-center justify-between px-8">

        {/* Left - Logo */}
        <div>
          <img
            src="/Img.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Middle - Navigation */}
      
        <div className="flex items-center gap-4">
              <Link href={'/workout'}>
                <button className="rounded-md px-5 py-2 font-medium hover:bg-gray-100">
            Workout
          </button>
              
              </Link>
           <Link href={'/myplan'}>
              
              <button className="rounded-md px-5 py-2 font-medium hover:bg-gray-100">
            My Plan
          </button>
              </Link>

          
        </div>

        {/* Right - Counters */}
        <div className="flex items-center gap-6">

               <Link href={'/myplan'}>
               <PlanBtn></PlanBtn>
              
              {/* <button className="font-medium">
            Plan <span className="ml-1 text-gray-500">{todayCard.length}</span>
          </button> */}
              </Link>
         
             <Link href={'/myplan'}>
            {/* <button className="font-medium">
            Saved <span className="ml-1 text-gray-500">(0)</span>
          </button> */}
          <SaveBtn></SaveBtn>
              </Link>
       
        </div>

      </div>
    </nav>
  );
};

export default Navbar;