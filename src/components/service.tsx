import React from "react";

export default function Service() {
  return (
    <section className="w-full bg-zinc-50 py-10 md:py-20 lg:py-36 relative z-10 lg:rounded-tr-[200px] overflow-hidden">
      <div className="max-w-7xl px-5 md:px-10 mx-auto">
        <h3 className="text-[#8053FF] font-semibold mb-4">- For Investors</h3>
        <h2 className="text-black text-3xl md:text-5xl font-bold mb-4 w-9/12">
          Access <span className="text-[#8053FF]">high-potential</span> DeFi
          startups before everyone else
        </h2>
        <div className="flex flex-wrap gap-3 my-12">
          <div className="flex gap-4 p-4 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                Low entry prices on DeFi tokens
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                Fully decentralized{" "}
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                Only vetted projects that passed our due diligence
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                New projects every month
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                High chance of success thanks to our incubation program
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                Yield farming rewards in PIE{" "}
                <span className="text-[#8053FF]">(up to 100% a year)</span>
              </h1>
            </div>
          </div>
        </div>
        <a
          href=""
          className="bg-white text-[#8053FF] border-[1px] border-[#8053FF] hover:text-white hover:bg-[#8053FF] py-4 px-6 text-sm md:text-base font-thin rounded-md"
        >
          Become an Investor
        </a>
      </div>
      <img
        src="/background/bg-texture-service.png"
        alt="bg-texture"
        className="absolute top-0 -z-10"
      />
    </section>
  );
}
