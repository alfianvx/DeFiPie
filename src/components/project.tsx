import React from "react";

export default function Project() {
  return (
    <section className="w-full bg-gradient-to-b from-zinc-50 to-white py-10 md:py-20 lg:py-32 relative z-10 lg  :rounded-tl-[200px] overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-10 ">
        <h3 className="text-[#8053FF] font-semibold mb-4">- For Projects</h3>
        <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">
          Vision is the <span className="text-[#8053FF]">answer</span>
        </h1>
        <p className="text-black w-full md:w-2/3 text-sm mb-6 md:mb-10">
          You have an idea, IncuPie has a plan. We offer everything you need to
          go from an early-stage idea to a successful exchange listing.
        </p>
        <div className="flex flex-wrap gap-3 mb-6 md:mb-10">
          <div className="flex gap-4 p-5 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1
              "
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                Decentralized Invesment
              </h1>
              <p className="font-thin text-xs md:text-base">
                we'll distribute your tokens among our huge and active community
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                Access to professional investors
              </h1>
              <p className="font-thin text-xs md:text-base">
                Access to professional investors{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                Exchange relations
              </h1>
              <p className="font-thin text-xs md:text-base">
                get better terms when listing your token{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">Staking</h1>
              <p className="font-thin text-xs md:text-base">
                allow users to stake your tokens on DeFiPie and earn rewards{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                Product-market fit analysis
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                Detailed tokenomics
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                Smart contract audit
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                Community-building and social media marketing
              </h1>
            </div>
          </div>
          <div className="flex gap-4 p-5 bg-white w-full md:w-[49%] drop-shadow rounded-md">
            <img
              src="/icons/checklist.png"
              alt="checklist-icon"
              className="h-max mt-1"
            />
            <div className="text-black">
              <h1 className="font-medium text-base md:text-lg">
                White Paper, blog, and media content from the best authors{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href=""
            className="bg-white text-[#8053FF] border-[1px] border-[#8053FF] hover:text-white hover:bg-[#8053FF] py-4 px-6 text-sm md:text-base font-thin rounded-md"
          >
            I Need Funding
          </a>
          <a
            href=""
            className="bg-white text-[#8053FF] border-[1px] border-[#8053FF] hover:text-white hover:bg-[#8053FF] py-4 px-6 text-sm md:text-base font-thin rounded-md"
          >
            Learn More
          </a>
        </div>
      </div>
      <img
        src="/background/bg-texture-vision.png"
        alt="bg-texture"
        className="absolute top-0 -z-10"
      />
    </section>
  );
}
