import React from "react";

export default function Partners() {
  return (
    <section className="w-full bg-gradient-to-b from-zinc-50 to-white py-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-[#23155B] text-center mb-4">
          Brought to you by DeFiPie in partnership with
        </h1>
        <div className="flex justify-between">
          <img src="/partner/burberry.png" alt="burberry" />
          <img src="/partner/google.png" alt="google" />
          <img src="/partner/sony.png" alt="sony" />
          <img src="/partner/ikea.png" alt="ikea" />
          <img src="/partner/nectar.png" alt="nectar" />
        </div>
      </div>
    </section>
  );
}
