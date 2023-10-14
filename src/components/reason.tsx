import React from "react";

export default function Reason() {
  return (
    <section className="w-full bg-white pb-32">
      <div className="max-w-5xl mx-auto flex justify-between gap-5 place-content-between">
        <div className="w-2/4">
          <h1 className="text-black text-5xl leading-tight font-bold">
            Traditional Fundraising{" "}
            <span className="text-[#8053FF]">Doesn't Work</span> in DeFi
          </h1>
        </div>
        <div className="w-2/4">
          <div className="flex gap-4 text-xl p-4 bg-white drop-shadow rounded-md mb-3">
            <div>
              <span className="text-[#8053FF]">01</span>
            </div>
            <p className="text-black">
              Without a big budget, it's hard to approach venture investors
            </p>
          </div>
          <div className="flex gap-4 text-xl p-4 bg-white drop-shadow rounded-md mb-3">
            <div>
              <span className="text-[#8053FF]">02</span>
            </div>
            <p className="text-black">
              VCs don't care about your DeFi idea – only their gains{" "}
            </p>
          </div>
          <div className="flex gap-4 text-xl p-4 bg-white drop-shadow rounded-md mb-3">
            <div>
              <span className="text-[#8053FF]">03</span>
            </div>
            <p className="text-black">
              They force you into selling your tokens at a huge discount…{" "}
            </p>
          </div>
          <div className="flex gap-4 text-xl p-4 bg-white drop-shadow rounded-md mb-3">
            <div>
              <span className="text-[#8053FF]">04</span>
            </div>
            <p className="text-black">
              ...Then dump them at the first opportunity{" "}
            </p>
          </div>
          <div className="flex gap-4 text-xl p-4 bg-white drop-shadow rounded-md mb-3">
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
