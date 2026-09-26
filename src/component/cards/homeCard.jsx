
import React from "react";
import Link from "next/link";

const HomeCard = ({ elm }) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    rating,
    description,
  } = elm;

  return (
    <Link href={`/workout/${elm.id}`} className="block h-full">
      <div className="group h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-zinc-600">

        {/* Image */}
        <div className="relative h-52 overflow-hidden sm:h-56">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold backdrop-blur sm:right-4 sm:top-4">
            {difficulty}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">

          {/* Name + Rating */}
          <div className="mb-3 flex items-start justify-between gap-3">
            <h2 className="text-lg font-bold uppercase sm:text-xl">
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

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 border-y border-zinc-800 py-4 text-sm">
            <div>
              <p className="text-zinc-500">Duration</p>
              <p className="font-semibold">{duration} min</p>
            </div>

            <div>
              <p className="text-zinc-500">Calories</p>
              <p className="font-semibold">{caloriesBurned} kcal</p>
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
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;