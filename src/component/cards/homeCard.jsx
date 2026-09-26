import React from "react";
import Link from "next/link";

const homeCard = ({ elm }) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
  } = elm;

  return (
     <Link href={`/workout/${elm.id}`}>
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-zinc-600">

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Difficulty */}
        <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold backdrop-blur">
          {difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Name + Rating */}
        <div className="mb-3 flex items-start justify-between gap-4">
          <h2 className="text-xl font-bold">
            {name}
          </h2>

          <span className="shrink-0 text-sm text-yellow-400">
            ★ {rating}
          </span>
        </div>

        {/* Muscle Groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mb-5 line-clamp-2 text-sm leading-6 text-zinc-400">
          {description}
        </p>

        {/* Workout Stats */}
        <div className="grid grid-cols-2 gap-3 border-y border-zinc-800 py-4 text-sm">

          <div>
            <p className="text-zinc-500">Duration</p>
            <p className="font-semibold">{duration} min</p>
          </div>

          <div>
            <p className="text-zinc-500">Calories</p>
            <p className="font-semibold">{caloriesBurned} kcal</p>
          </div>

          <div>
            <p className="text-zinc-500">Sets</p>
            <p className="font-semibold">{sets}</p>
          </div>

          <div>
            <p className="text-zinc-500">Reps</p>
            <p className="font-semibold">{reps}</p>
          </div>

        </div>

        {/* Equipment */}
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Equipment
          </p>

          <p className="mt-1 text-sm text-zinc-300">
            {equipment}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex gap-3">
        </div>

      </div>
    </div>
    </Link>
  );
};

export default homeCard;

// import Link from "next/link";

// const HomeCard = ({ workout }) => {
//   return (
//     <Link href={`/workout/${workout.id}`}>
//       <div>
//         {/* তোমার existing card design এখানে */}
        
        
//         <img src={workout.image} alt={workout.name} />

//         <h2>{workout.name}</h2>
//       </div>
//     </Link>
//   );
// };

// export default HomeCard;