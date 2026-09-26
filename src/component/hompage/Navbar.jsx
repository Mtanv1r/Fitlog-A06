
"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import PlanBtn from "../btns/navbtns/planBtn";
import SaveBtn from "../btns/navbtns/saveBtn";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full border-b border-gray-800 bg-black">
      <nav className="container mx-auto">
        <div
          className="
            mx-auto flex min-h-16 items-center justify-between
            gap-3 px-4
            sm:px-6
            md:px-8
          "
        >
        
          <div className="shrink-0">
            <Link href="/">

<div className="shrink-0 ">
  <Link href="/" className="flex gap-2 items-center justify-evenly">
    <Image
      src="/logo.png"
      alt="FitLog Logo"
      width={120}
      height={40}
      priority
      className="h-8 w-auto sm:h-9 md:h-10"
    />
      <span className="text-lg font-bold text-white sm:text-xl md:text-2xl">
      FITLOG
    </span>
  </Link>
</div>

            </Link>
          </div>

        
          <div
            className="
              flex items-center gap-1
              sm:gap-2
              md:gap-4
            "
          >
            <Link
              href="/workout"
              className={`
                rounded-md border-2 px-3 py-1.5
                text-sm font-medium transition
                sm:px-4 sm:py-2 sm:text-base
                md:px-5
                ${
                  pathname === "/workout"
                    ? "border-green-500 bg-green-500 text-black"
                    : "border-transparent text-white hover:border-green-500"
                }
              `}
            >
              Workout
            </Link>

            <Link
              href="/myplan"
              className={`
                rounded-md border-2 px-3 py-1.5
                text-sm font-medium transition
                sm:px-4 sm:py-2 sm:text-base
                md:px-5
                ${
                  pathname === "/myplan"
                    ? "border-green-500 bg-green-500 text-black"
                    : "border-transparent text-white hover:border-green-500"
                }
              `}
            >
              My Plan
            </Link>
          </div>

          {/* Right - Counters */}
          <div
            className="
              flex items-center gap-2
              sm:gap-3
              md:gap-6
            "
          >
            <Link href="/myplan">
              <PlanBtn />
            </Link>

            <Link href="/myplan">
              <SaveBtn />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;