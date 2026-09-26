
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-black px-4 py-12 text-white sm:px-6 sm:py-16 md:px-10 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row md:justify-between">

        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gray-400 sm:text-sm">
            WORKOUT LIBRARY
          </p>

          <h1 className="mb-6 text-4xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mb-8 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>

          {/* CTA */}
          <a
            href="#library"
            className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-gray-200 sm:px-6 sm:text-base"
          >
            <span className="text-lg">→</span>
            BROWSE WORKOUTS
          </a>
        </div>

        {/* Right Hero Image */}
        <div className="w-full md:w-1/2">
     <Image
  src="/banner.png"
  alt="FitLog Banner"
  width={1200}
  height={600}
  priority
  className="h-auto w-full object-cover"
/>
        </div>

      </div>
    </section>
  );
};

export default Hero;