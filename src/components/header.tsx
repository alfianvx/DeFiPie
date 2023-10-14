import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white fixed z-50">
      <nav className="max-w-screen-lg mx-auto py-4 flex justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/icons/nav-icon.png"
            alt="nav-icon"
            className="w-[52px] h-[59px] "
          />
          <h1 className="text-black font-bold">Vision Capital</h1>
        </div>
        <div className="flex items-center gap-8">
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
      </nav>
    </header>
  );
}
