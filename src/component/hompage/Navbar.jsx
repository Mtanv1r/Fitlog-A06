


// import Link from 'next/link';
// // import React from "react";
// import React, { useContext } from "react";
// import { CardContext } from '@/context/cardContext';
// import {CardProvider} from "@/context/cardContext"
// import PlanBtn from '../btns/navbtns/planBtn';
// import SaveBtn from '../btns/navbtns/saveBtn';


// const Navbar = () => {

//   // const{todayCard}=useContext(CardContext)

//   return (
//     <div className="container mx-auto">

//    <nav className="w-full border-b bg-black">
//       <div className="mx-auto flex h-16 items-center justify-between px-8">

//         {/* Left - Logo */}
//         <div>
//           <img
//             src="/Img.png"
//             alt="Logo"
//             className="h-10 w-auto"
//           />
//         </div>

//         {/* Middle - Navigation */}
      
//         <div className="flex items-center gap-4">
//               <Link href={'/workout'}>
//                 <button className="rounded-md px-5 py-2 font-medium hover:border-green-500 border-2">
//             Workout
//           </button>
              
//               </Link>
//            <Link href={'/myplan'}>
              
//               <button className="rounded-md px-5 py-2 font-medium hover:border-green-500 border-2">
//             My Plan
//           </button>
//               </Link>

          
//         </div>

//         {/* Right - Counters */}
//         <div className="flex items-center gap-6">

//                <Link href={'/myplan'}>
//                <PlanBtn></PlanBtn>
              
           
//               </Link>
         
//              <Link href={'/myplan'}>
          
//           <SaveBtn></SaveBtn>
//               </Link>
       
//         </div>

//       </div>
//     </nav>


//     </div>
 
//   );
// };

// export default Navbar;
"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import PlanBtn from "../btns/navbtns/planBtn";
import SaveBtn from "../btns/navbtns/saveBtn";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="container mx-auto">
      <nav className="w-full border-b border-gray-800 bg-black">
        <div
          className="
            mx-auto flex min-h-16 items-center justify-between
            gap-3 px-4
            sm:px-6
            md:px-8
          "
        >
          {/* Left - Logo */}
          <div className="shrink-0">
            <Link href="/">
              <img
                src="/Img.png"
                alt="Logo"
                className="h-8 w-auto sm:h-9 md:h-10"
              />
            </Link>
          </div>

          {/* Middle - Navigation */}
          <div
            className="
              flex items-center gap-1
              sm:gap-2
              md:gap-4
            "
          >
            <Link
              href="/workout"
              className={`
                rounded-md border-2 px-3 py-1.5
                text-sm font-medium transition
                sm:px-4 sm:py-2 sm:text-base
                md:px-5
                ${
                  pathname === "/workout"
                    ? "border-green-500 bg-green-500 text-black"
                    : "border-transparent text-white hover:border-green-500"
                }
              `}
            >
              Workout
            </Link>

            <Link
              href="/myplan"
              className={`
                rounded-md border-2 px-3 py-1.5
                text-sm font-medium transition
                sm:px-4 sm:py-2 sm:text-base
                md:px-5
                ${
                  pathname === "/myplan"
                    ? "border-green-500 bg-green-500 text-black"
                    : "border-transparent text-white hover:border-green-500"
                }
              `}
            >
              My Plan
            </Link>
          </div>

          {/* Right - Counters */}
          <div
            className="
              flex items-center gap-2
              sm:gap-3
              md:gap-6
            "
          >
            <Link href="/myplan">
              <PlanBtn />
            </Link>

            <Link href="/myplan">
              <SaveBtn />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;