import React from "react";

export default function Purpose() {
  return (
    <section className="w-full bg-zinc-50 py-40 relative">
      <div className="max-w-5xl mx-auto flex items-center gap-5">
        <div>
          <img src="/icons/defipie-logo-bg.png" alt="defipie-logo-bg" />
        </div>
        <div className="w-2/4">
          <div className="pb-6">
            <img src="/icons/general-logo.png" alt="general-logo" />
          </div>
          <h1 className="text-black font-bold text-5xl w-3/4 mb-6">
            <span className="text-[#8053FF]">Brought to you</span> by DeFiPie
          </h1>
          <p className="text-black mb-8">
            DeFiPie is the first DeFi app to bring together crypto lending,
            staking, P2P loans, liquidity mining, and trading. We have a strong
            development and marketing team and an active, constantly growing
            community.
          </p>
          <p className="text-black">
            Project incubation is a natural next step: now that we've done it
            ourselves, we want to help other quality projects to achieve
            success.{" "}
          </p>
        </div>
      </div>
      <img
        src="/assets/people.png"
        alt="people-smile"
        className="absolute top-0 -left-32"
      />
    </section>
  );
}
