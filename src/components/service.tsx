import React from "react";

export default function Service() {
  return (
    <section className="w-full bg-zinc-50 py-36 relative z-10 rounded-tr-[250px] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-[#8053FF] font-semibold mb-4">- For Investors</h3>
        <h1 className="text-black text-5xl font-bold mb-4 w-9/12">
          Access <span className="text-[#8053FF]">high-potential</span> DeFi
          startups before everyone else
        </h1>
        <div className="flex flex-wrap gap-5 my-12">
          <div className="flex gap-4 p-5 bg-white w-[49%] drop-shadow rounded-md">
            <div>
              <img src="/icons/checklist.png" alt="checklist-icon" />
            </div>
            <div className="text-black">
              <h1 className="font-medium text-lg">
                Low entry prices on DeFi tokens
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-[49%] drop-shadow rounded-md">
            <div>
              <img src="/icons/checklist.png" alt="checklist-icon" />
            </div>
            <div className="text-black">
              <h1 className="font-medium text-lg">Fully decentralized </h1>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-[49%] drop-shadow rounded-md">
            <div>
              <img src="/icons/checklist.png" alt="checklist-icon" />
            </div>
            <div className="text-black">
              <h1 className="font-medium text-lg">
                Only vetted projects that passed our due diligence{" "}
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-[49%] drop-shadow rounded-md">
            <div>
              <img src="/icons/checklist.png" alt="checklist-icon" />
            </div>
            <div className="text-black">
              <h1 className="font-medium text-lg">New projects every month</h1>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-[49%] drop-shadow rounded-md">
            <div>
              <img src="/icons/checklist.png" alt="checklist-icon" />
            </div>
            <div className="text-black">
              <h1 className="font-medium text-lg">
                High chance of success thanks to our incubation program
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-[49%] drop-shadow rounded-md">
            <div>
              <img src="/icons/checklist.png" alt="checklist-icon" />
            </div>
            <div className="text-black">
              <h1 className="font-medium text-lg">
                Yield farming rewards in PIE{" "}
                <span className="text-[#8053FF]">(up to 100% a year)</span>
              </h1>
            </div>
          </div>
        </div>
        <a href="" className="bg-[#8053FF] py-4 px-6 font-thin rounded-md">
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
