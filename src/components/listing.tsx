import React from "react";

export default function Listing() {
  return (
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[#23155B] text-center mb-4">In the pipeline</h1>
        <div className="flex flex-wrap justify-center">
          <img
            src="/community/harvard.png"
            alt="harvard-logo"
            className="w-1/2 md:w-auto"
          />
          <img
            src="/community/microsoft.png"
            alt="microsoft-logo"
            className="w-1/2 md:w-auto"
          />
          <img
            src="/community/nasa.png"
            alt="nasa-logo"
            className="w-1/2 md:w-auto"
          />
          <img
            src="/community/yale.png"
            alt="yale-logo"
            className="w-1/2 md:w-auto"
          />
          <img
            src="/community/payoner.png"
            alt="payoner-logo"
            className="w-1/2 md:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
