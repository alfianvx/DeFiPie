import React from "react";

export default function Partners() {
  return (
    <section className="w-full bg-white py-10 md:py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-[#23155B] text-center text-sm mb-8">
          Brought to you by DeFiPie in partnership with
        </h1>
        <div className="flex flex-wrap justify-center">
          <img
            src="/partner/burberry.png"
            className="w-1/2 md:w-auto"
            alt="burberry"
          />
          <img
            src="/partner/google.png"
            className="w-1/2 md:w-auto"
            alt="google"
          />
          <img src="/partner/sony.png" className="w-1/2 md:w-auto" alt="sony" />
          <img src="/partner/ikea.png" className="w-1/2 md:w-auto" alt="ikea" />
          <img
            src="/partner/nectar.png"
            className="w-1/2 md:w-auto"
            alt="nectar"
          />
        </div>
      </div>
    </section>
  );
}
