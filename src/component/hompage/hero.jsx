// import React from 'react';

// const banner = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default banner;
import React from "react";

const Hero = () => {
  return (
    <section className="bg-black px-10 py-20 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10">

        {/* Left Content */}
        <div className="w-1/2">
          {/* Eyebrow */}
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-gray-400">
            WORKOUT LIBRARY
          </p>

          {/* Main Heading */}
          <h1 className="mb-6 text-6xl font-bold uppercase leading-tight">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-xl text-lg leading-8 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>

          {/* CTA */}
          <a
            href="#library"
            className="inline-flex items-center gap-2 bg-white px-6 py-3 font-bold text-black transition hover:bg-gray-200"
          >
            <span>→</span>
            BROWSE WORKOUTS
          </a>
        </div>

        {/* Right Image */}
        <div className="w-1/2">
          <img
            src="/your-image.png"
            alt="Workout"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;