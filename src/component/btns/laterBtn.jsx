
"use client";

import { toast } from "react-toastify";
import React, { useContext } from "react";
import { CardContext } from "@/context/cardContext";

const LaterBtn = ({ NthInfo }) => {
  const { saveCard, setSaveCard } = useContext(CardContext);

  const handleSave = () => {
    const alreadySaved = saveCard.some(
      (item) => item.id === NthInfo.id
    );

    if (alreadySaved) {
      toast.warning(`${NthInfo.name} is already saved`);
      return;
    }

    setSaveCard([...saveCard, NthInfo]);
    toast.success(`You have added ${NthInfo.name}`);
  };

  return (
    <div>
      <button
        onClick={handleSave}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-700 px-6 py-4 text-sm font-bold uppercase transition hover:bg-zinc-900"
      >
        <span>♡</span>
        Save for later
      </button>
    </div>
  );
};

export default LaterBtn;