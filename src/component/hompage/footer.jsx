
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row md:px-8 md:py-8">
        
      
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <img
            src="/Img.png"
            alt="FitLog Logo"
            className="h-8 w-auto sm:h-9"
          />

          <span className="text-xl font-bold tracking-wider sm:text-2xl">
            FITLOG
          </span>
        </Link>

     
        <p className="text-center text-xs text-zinc-500 sm:text-sm md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;