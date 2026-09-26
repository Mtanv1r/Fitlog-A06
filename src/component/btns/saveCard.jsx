// import React from "react";
// import Link from "next/link";

// const SaveCard = ({ elm, onRemove }) => {
   
//   const {
//     id,
//     name,
//     image,
//     equipment,
//     duration,
//     caloriesBurned,
//     rating,
//   } = elm;

//   return (
//     <div className="mb-4 flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-white sm:flex-row sm:items-center">
      
//       {/* Left Side */}
//       <div className="flex min-w-0 flex-1 gap-4">
        
//         {/* Image */}
//         <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-40">
//           <img
//             src={image}
//             alt={name}
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {/* Info */}
//         <div className="flex min-w-0 flex-1 flex-col justify-center">
//           <h2 className="truncate text-lg font-bold sm:text-xl">
//             {name}
//           </h2>

//           <p className="mt-1 truncate text-sm text-zinc-500">
//             {equipment}
//           </p>

//           <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
//             <span>◷ {duration} min</span>
//             <span>🔥 {caloriesBurned} kcal</span>
//             <span>★ {rating}</span>
//           </div>
//         </div>
//       </div>

//       {/* Right Side Buttons */}
//       <div className="flex w-full gap-2 sm:w-auto sm:flex-col">
        
//         <Link
//           href={`/workout/${id}`}
//           className="flex flex-1 items-center justify-center rounded-lg border border-zinc-700 px-4 py-2 text-xs font-bold hover:bg-zinc-800 sm:flex-none"
//         >
//           View Details
//         </Link>

//         <button
//           className="flex-1 rounded-lg bg-white px-4 py-2 text-xs font-bold text-black hover:bg-zinc-200 sm:flex-none"
//         >
//           Mark as Done
//         </button>

//         <button
//           onClick={() => onRemove(id)}
//           className="rounded-lg px-4 py-2 text-lg text-zinc-500 hover:bg-zinc-800 hover:text-white"
//         >
//           ×
//         </button>

//       </div>
//     </div>
//   );
// };

// export default SaveCard;


import React from "react";
import Link from "next/link";

const SaveCard = ({ elm, onRemove }) => {
  const {
    id,
    name,
    image,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = elm;

  return (
    <div className="mb-4 flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-white sm:flex-row sm:items-center">

      {/* Left */}
      <div className="flex min-w-0 flex-1 gap-4">

        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-36">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h2 className="text-base font-bold sm:text-xl">
            {name}
          </h2>

          <p className="mt-1 truncate text-sm text-zinc-500">
            {equipment}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-400 sm:text-sm">
            <span>◷ {duration} min</span>
            <span>🔥 {caloriesBurned} kcal</span>
            <span>★ {rating}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex w-full flex-wrap gap-2 sm:w-auto sm:flex-nowrap">
        <Link
          href={`/workout/${id}`}
          className="flex flex-1 items-center justify-center rounded-lg border border-zinc-700 px-3 py-2 text-xs font-bold whitespace-nowrap hover:bg-zinc-800 sm:flex-none"
        >
          View Details
        </Link>

        <button
          className="flex-1 rounded-lg bg-white px-3 py-2 text-xs font-bold text-black whitespace-nowrap hover:bg-zinc-200 sm:flex-none"
        >
          Mark as Done
        </button>

        <button
          onClick={() => onRemove(id)}
          className="rounded-lg px-3 py-2 text-lg text-zinc-500 hover:bg-zinc-800 hover:text-white"
        >
          ×
        </button>
      </div>

    </div>
  );
};

export default SaveCard;