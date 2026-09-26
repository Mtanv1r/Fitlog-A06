
"use client";

import React, { useContext } from "react";
import { CardContext } from "@/context/cardContext";

const SaveBtn = () => {
  const { saveCard } = useContext(CardContext);

  return (
    <div>
      <button className="font-medium">
        Saved <span className="ml-1 text-gray-500">{saveCard.length}</span>
      </button>
    </div>
  );
};

export default SaveBtn;