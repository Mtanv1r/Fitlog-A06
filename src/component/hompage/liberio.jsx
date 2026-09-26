
import React from "react";
import HomeCard from "../cards/homeCard";

const getInfo = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Liberio = async () => {
  const arrInfo = await getInfo();

  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center px-4 pt-10 text-center sm:px-6 md:px-8">
        <h1 className="text-4xl font-bold uppercase sm:text-5xl md:text-6xl">
          THE LIBRARY
        </h1>

        <p className="mt-3 text-base text-gray-500 sm:text-xl md:text-2xl">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div
        id="library"
        className="
          container mx-auto my-12 grid grid-cols-1 gap-5 px-4
          sm:grid-cols-2 sm:px-6
          lg:grid-cols-3 lg:px-8
        "
      >
        {arrInfo.map((elm) => (
          <HomeCard elm={elm} key={elm.id} />
        ))}
      </div>
    </>
  );
};

export default Liberio;