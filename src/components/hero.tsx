import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-white py-14 md:py-24">
      <div className="max-w-5xl h-[596px] mx-auto bg-zinc-50 flex flex-col items-center justify-center relative z-10">
        <h1 className="text-[#23155B] font-bold text-5xl md:text-6xl mb-5 md:mb-6">
          Vision Capital
        </h1>
        <span className="text-[#23155B] text-sm md:text-xl leading-4 mb-10">
          The right way to fund and incubate your DeFi startup
        </span>
        <div className="flex items-center gap-3">
          <a
            href=""
            className="bg-white text-[#8053FF] rounded-md text-sm md:text-base border-[1px] py-2 px-4 border-[#8053FF] hover:bg-[#8053FF] hover:text-white"
          >
            I Need Funding
          </a>
          <a
            href=""
            className=" bg-white text-[#8053FF] rounded-md text-sm md:text-base border-[1px] py-2 px-4 border-[#8053FF] hover:bg-[#8053FF] hover:text-white"
          >
            Become an Investor
          </a>
        </div>
        <img
          src="/background/bg-texture-right.png"
          alt="bg-textture"
          className="absolute top-0 left-0 -z-10"
        />
        <img
          src="/background/bg-texture-left.png"
          alt="bg-textture"
          className="absolute top-0 right-0 -z-10"
        />
      </div>
    </section>
  );
}
