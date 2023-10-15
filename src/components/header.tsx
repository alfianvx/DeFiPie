import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white fixed z-50">
      <nav className="max-w-5xl mx-auto py-4 px-5 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/icons/nav-icon.png"
            alt="nav-icon"
            className="w-8 md:w-[52px] md:h-[59px]"
          />
          <h1 className="text-black font-bold">Vision Capital</h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="" className="text-black">
            For Projects
          </a>
          <a href="" className="text-black">
            For Investors
          </a>
          <a href="" className="py-2 px-4 bg-[#8053FF] rounded-md">
            Join Now
          </a>
        </div>
        <button className="md:hidden flex flex-col">
          <span className="w-8 h-[3px] mb-1 bg-[#8053FF]"></span>
          <span className="w-8 h-[3px] mb-1 bg-[#8053FF]"></span>
          <span className="w-8 h-[3px] mb-1 bg-[#8053FF]"></span>
        </button>
      </nav>
    </header>
  );
}
