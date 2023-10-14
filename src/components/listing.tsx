import React from "react";

export default function Listing() {
  return (
    <section className="w-full bg-white pb-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-[#23155B] text-center mb-4">In the pipeline</h1>
        <div className="flex justify-between">
          <img src="/community/harvard.png" alt="harvard-logo" />
          <img src="/community/microsoft.png" alt="microsoft-logo" />
          <img src="/community/nasa.png" alt="nasa-logo" />
          <img src="/community/yale.png" alt="yale-logo" />
          <img src="/community/payoner.png" alt="payoner-logo" />
        </div>
      </div>
    </section>
  );
}
