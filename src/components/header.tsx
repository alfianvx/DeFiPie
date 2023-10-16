"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="w-full bg-white fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto py-4 px-5 md:px-10 flex items-center justify-between">
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
        <button className="md:hidden flex flex-col" onClick={toggleMenu}>
          <span
            className={`w-5 h-[3px] mb-[5px] rounded-md bg-[#23155B] ${
              isMenuVisible
                ? "rotate-45 transition ease-in-out duration-100"
                : ""
            }`}
          ></span>
          <span
            className={`w-8 h-[3px] mb-[5px] rounded-md bg-[#23155B] ${
              isMenuVisible ? "opacity-0 ease-in-out duration-100" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-[3px] mb-[5px] rounded-md bg-[#23155B] ${
              isMenuVisible ? "-rotate-45 ease-in-out duration-100" : ""
            }`}
          ></span>
        </button>
      </nav>
      <div
        className={`md:hidden ${
          isMenuVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-100"
        } w-full min-h-screen flex flex-col gap-20 items-center py-24 px-5 bg-white fixed left-0 transition-transform ease-in-out duration-300`}
      >
        <a href="" className="text-black">
          For Projects
        </a>
        <a href="" className="text-black">
          For Investors
        </a>
        <a href="" className="py-4 px-10 bg-[#8053FF] rounded-md">
          Join Now
        </a>
      </div>
    </header>
  );
}
