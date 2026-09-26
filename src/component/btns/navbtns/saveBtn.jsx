
// "use client";

// import React, { useContext } from "react";
// import { CardContext } from "@/context/cardContext";

// const SaveBtn = () => {
//   const { saveCard } = useContext(CardContext);

//   return (
//     <div>
//       <button className="font-medium">
//         Saved <span className="ml-1 text-gray-500 text-green-600">{saveCard.length}</span>
//       </button>
//     </div>
//   );
// };

// export default SaveBtn;
"use client";

import React, { useContext } from "react";
import { CardContext } from "@/context/cardContext";

const SaveBtn = () => {
  const { saveCard } = useContext(CardContext);

  return (
    <div>
      <button
        className="
          rounded-full
          border border-[#ccff00]
          px-3 py-1.5
          text-sm font-bold
          text-white
          transition
          hover:bg-[#ccff00]
          hover:text-black
          sm:px-4 sm:py-2
          sm:text-base
          md:text-lg
        "
      >
        Saved
        <span className="ml-1 text-[#ccff00]">
          {saveCard.length}
        </span>
      </button>
    </div>
  );
};

export default SaveBtn;