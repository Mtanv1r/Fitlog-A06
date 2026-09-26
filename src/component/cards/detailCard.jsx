

import React from "react";
import TodayBtn from "../btns/todayBtn";
import LaterBtn from "../btns/laterBtn";

const DetailCard = ({ NthInfo }) => {
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
    <section className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 sm:py-12 md:px-10 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">

        
        <div className="overflow-hidden rounded-2xl bg-zinc-900">
          <img
            src={image}
            alt={name}
            className="h-full min-h-[350px] w-full object-cover sm:min-h-[450px] lg:min-h-[650px]"
          />
        </div>

        {/* Right */}
        <div className="py-2">

          <h1 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
            {name}
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-400 sm:mt-5 sm:text-lg sm:leading-8">
            {description}
          </p>

          
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-300 sm:px-4 sm:py-2"
              >
                {muscle}
              </span>
            ))}
          </div>

       
          <div className="mt-7 sm:mt-8">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              Key Specs
            </h2>

            <div className="overflow-hidden rounded-xl border border-zinc-800">
              {[
                ["EQUIPMENT", equipment],
                ["DIFFICULTY", difficulty],
                ["SETS", sets],
                ["REPS", reps],
                ["DURATION", `${duration} min`],
                ["CALORIES", `${caloriesBurned} kcal`],
                ["RATING", `★ ${rating}`],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid grid-cols-2 ${
                    index !== 6 ? "border-b border-zinc-800" : ""
                  }`}
                >
                  <div className="bg-zinc-900 px-3 py-3 text-xs text-zinc-500 sm:px-5 sm:py-4 sm:text-sm">
                    {label}
                  </div>

                  <div
                    className={`px-3 py-3 text-xs font-medium sm:px-5 sm:py-4 sm:text-sm ${
                      label === "RATING" ? "text-yellow-400" : ""
                    }`}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-7 sm:mt-8">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              Instructions
            </h2>

            <ol className="space-y-4">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3 sm:gap-4">
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

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <TodayBtn NthInfo={NthInfo} />
            <LaterBtn NthInfo={NthInfo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCard;
