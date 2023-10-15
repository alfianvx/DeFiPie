import React from "react";

export default function Purpose() {
  return (
    <section className="w-full bg-gradient-to-b from-zinc-50 to-white py-10 md:py-18 lg:py-40">
      <div className="max-w-5xl mx-auto flex items-center gap-5 relative">
        <div>
          <img
            src="/icons/defipie-logo-bg.png"
            alt="defipie-logo-bg"
            className="hidden lg:block"
          />
        </div>
        <div className="w-full md:w-2/4">
          <div className="pb-6">
            <img src="/icons/general-logo.png" alt="general-logo" />
          </div>
          <h2 className="text-black font-bold text-3xl md:text-5xl lg:w-3/4 mb-6">
            <span className="text-[#8053FF]">Brought to you</span> by DeFiPie
          </h2>
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
        <img
          src="/assets/people.png"
          alt="people-smile"
          className="absolute top-50% -left-72 hidden lg:block"
        />
      </div>
    </section>
  );
}
