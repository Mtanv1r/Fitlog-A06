
"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { CardContext } from "@/context/cardContext";
import TodayCard from "@/component/btns/todayCard";
import CounterCard from "@/component/cards/counterCard";
import SaveCard from "@/component/btns/saveCard";
import { toast } from "react-toastify";

const Page = () => {
  const {
    todayCard,
    setTodayCard,
    saveCard,
    setSaveCard,
  } = useContext(CardContext);

  const handleRemoveToday = (id) => {
    setTodayCard(todayCard.filter((item) => item.id !== id));
    toast.warning("Workout removed");
  };

  const handleRemoveSaved = (id) => {
    setSaveCard(saveCard.filter((item) => item.id !== id));
    toast.warning("Workout removed from saved");
  };

  return (
    <div className="container mx-auto min-h-screen px-4 py-10 text-white sm:px-6 md:px-8 md:py-14">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold uppercase sm:text-5xl">
          MY PLAN
        </h1>

        <p className="mt-2 text-base text-gray-500 sm:text-xl">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Counter */}
      <CounterCard />

      {/* Tabs */}
      <div className="mt-8">
        <div className="tabs tabs-border w-full">

          {/* Today's Plan */}
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
          />

          <div className="tab-content border-base-300 bg-black p-4 sm:p-6 md:p-8">

            {todayCard.length > 0 ? (
              todayCard.map((elm) => (
                <TodayCard
                  key={elm.id}
                  elm={elm}
                  onRemove={handleRemoveToday}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <h2 className="text-2xl font-bold uppercase">
                  NOTHING HERE YET
                </h2>

                <p className="mt-3 max-w-md text-sm text-zinc-500 sm:text-base">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="mt-6 rounded-lg bg-white px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-zinc-200"
                >
                  Go to workouts
                </Link>
              </div>
            )}
          </div>

          {/* Saved */}
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Saved"
          />

          <div className="tab-content border-base-300 bg-black p-4 sm:p-6 md:p-8">

            {saveCard.length > 0 ? (
              saveCard.map((elm) => (
                <SaveCard
                  key={elm.id}
                  elm={elm}
                  onRemove={handleRemoveSaved}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <h2 className="text-2xl font-bold uppercase">
                  NOTHING HERE YET
                </h2>

                <p className="mt-3 max-w-md text-sm text-zinc-500 sm:text-base">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="mt-6 rounded-lg bg-white px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-zinc-200"
                >
                  Go to workouts
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;