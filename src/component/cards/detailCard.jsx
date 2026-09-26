

import React from "react";
import TodayBtn from "../btns/todayBtn";
import LaterBtn from "../btns/laterBtn";

const detailCard = ({ NthInfo }) => {
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
    instructions,
  } = NthInfo;

  return (
    <section className="min-h-screen bg-black px-10 py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12">

        {/* ================= LEFT SIDE ================= */}
        <div className="overflow-hidden rounded-2xl bg-zinc-900">
          <img
            src={image}
            alt={name}
            className="h-full min-h-[650px] w-full object-cover"
          />
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="py-2">

          {/* Title */}
          <h1 className="text-5xl font-bold uppercase tracking-tight">
            {name}
          </h1>

          {/* Description */}
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            {description}
          </p>

          {/* Muscle Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= KEY SPECS ================= */}
          <div className="mt-8">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              Key Specs
            </h2>

            <div className="overflow-hidden rounded-xl border border-zinc-800">

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <div className="bg-zinc-900 px-5 py-4 text-sm text-zinc-500">
                  EQUIPMENT
                </div>
                <div className="px-5 py-4 text-sm font-medium">
                  {equipment}
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <div className="bg-zinc-900 px-5 py-4 text-sm text-zinc-500">
                  DIFFICULTY
                </div>
                <div className="px-5 py-4 text-sm font-medium">
                  {difficulty}
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <div className="bg-zinc-900 px-5 py-4 text-sm text-zinc-500">
                  SETS
                </div>
                <div className="px-5 py-4 text-sm font-medium">
                  {sets}
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <div className="bg-zinc-900 px-5 py-4 text-sm text-zinc-500">
                  REPS
                </div>
                <div className="px-5 py-4 text-sm font-medium">
                  {reps}
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <div className="bg-zinc-900 px-5 py-4 text-sm text-zinc-500">
                  DURATION
                </div>
                <div className="px-5 py-4 text-sm font-medium">
                  {duration} min
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <div className="bg-zinc-900 px-5 py-4 text-sm text-zinc-500">
                  CALORIES
                </div>
                <div className="px-5 py-4 text-sm font-medium">
                  {caloriesBurned} kcal
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className="bg-zinc-900 px-5 py-4 text-sm text-zinc-500">
                  RATING
                </div>
                <div className="px-5 py-4 text-sm font-medium text-yellow-400">
                  ★ {rating}
                </div>
              </div>

            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-8">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              Instructions
            </h2>

            <ol className="space-y-4">
              {instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-zinc-400">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-10 flex gap-4">

            {/* Primary */}
        
            <TodayBtn NthInfo={NthInfo}></TodayBtn>

            {/* Secondary */}
           
            <LaterBtn NthInfo={NthInfo}></LaterBtn>

          </div>

        </div>
      </div>
    </section>
  );
};

export default detailCard;
