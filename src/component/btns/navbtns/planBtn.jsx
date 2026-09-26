// "use client"
// import React, { useContext } from "react";
// import { CardContext } from '@/context/cardContext';
// import {CardProvider} from "@/context/cardContext"


// const PlanBtn = () => {

//      const{todayCard}=useContext(CardContext)
//     return (
//         <div>
//   <button className="font-medium bg-green-500 text-black font-bold text-2xl">
//             Plan <span className="ml-1 text-gray-500  text-black">{todayCard.length}</span>
//           </button>
//         </div>
//     );
// };

// export default PlanBtn;
"use client";

import React, { useContext } from "react";
import { CardContext } from "@/context/cardContext";

const PlanBtn = () => {
  const { todayCard } = useContext(CardContext);

  return (
    <div>
      <button
        className="
          rounded-full
          bg-[#ccff00]
          px-3 py-1.5
          text-sm font-bold
          text-black
          transition
          hover:opacity-90
          sm:px-4 sm:py-2
          sm:text-base
          md:text-lg
        "
      >
        Plan
        <span className="ml-1">
          {todayCard.length}
        </span>
      </button>
    </div>
  );
};

export default PlanBtn;