import React from "react";

export default function Reason() {
  return (
    <section className="w-full bg-white pb-10 md:pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2">
          <h1 className="text-black text-4xl md:text-5xl lg:text-5xl mb-5 leading-tight font-bold">
            Traditional Fundraising{" "}
            <span className="text-[#8053FF]">Doesn't Work</span> in DeFi
          </h1>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex gap-4 text-base md:text-base lg:text-lg lg p-4 bg-white drop-shadow rounded-md mb-3">
            <div>
              <span className="text-[#8053FF]">01</span>
            </div>
            <p className="text-black">
              Without a big budget, it's hard to approach venture investors
            </p>
          </div>
          <div className="flex gap-4 text-base md:text-base lg:text-lg lg p-4 bg-white drop-shadow rounded-md mb-3">
            <div>
              <span className="text-[#8053FF]">02</span>
            </div>
            <p className="text-black">
              VCs don't care about your DeFi idea – only their gains{" "}
            </p>
          </div>
          <div className="flex gap-4 text-base md:text-base lg:text-lg lg p-4 bg-white drop-shadow rounded-md mb-3">
            <div>
              <span className="text-[#8053FF]">03</span>
            </div>
            <p className="text-black">
              They force you into selling your tokens at a huge discount…{" "}
            </p>
          </div>
          <div className="flex gap-4 text-base md:text-base lg:text-lg lg p-4 bg-white drop-shadow rounded-md mb-3">
            <div>
              <span className="text-[#8053FF]">04</span>
            </div>
            <p className="text-black">
              ...Then dump them at the first opportunity{" "}
            </p>
          </div>
          <div className="flex gap-4 text-base md:text-base lg:text-lg lg p-4 bg-white drop-shadow rounded-md mb-3">
            <div>
              <span className="text-[#8053FF]">05</span>
            </div>
            <p className="text-black">
              Result: your token collapses. Everyone goes home.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
