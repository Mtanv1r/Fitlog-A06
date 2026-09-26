"use client";

import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CardContext } from "@/context/cardContext";

const TodayBtn = ({ NthInfo }) => {
  const { todayCard, setTodayCard } = useContext(CardContext);

  const handleToday = () => {
    const alreadyAdded = todayCard.some(
      (item) => item.id === NthInfo.id
    );

    if (alreadyAdded) {
      toast.warning(`${NthInfo.name} is already in your plan`);
      return;
    }

    setTodayCard([...todayCard, NthInfo]);
    toast.success(`${NthInfo.name} added to today's plan`);
  };

  return (
    <div>
      <button
        onClick={handleToday}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-bold uppercase text-black transition hover:bg-zinc-200"
      >
        Add to Today
      </button>
    </div>
  );
};

export default TodayBtn;