
"use client";

import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CardContext } from "@/context/cardContext";

const LaterBtn = ({ NthInfo }) => {
  const { saveCard, setSaveCard } = useContext(CardContext);

  const handleSave = () => {
    setSaveCard([...saveCard, NthInfo]);
    toast.success(`You have added ${NthInfo.name}`);
  };

  return (
    <button
      className="
        flex w-full items-center justify-center gap-2
        rounded-lg border border-zinc-700
        px-5 py-3
        text-sm font-bold uppercase
        transition hover:bg-zinc-900
        sm:px-6 sm:py-4
      "
      onClick={handleSave}
    >
      <span>♡</span>
      Save for later
    </button>
  );
};

export default LaterBtn;