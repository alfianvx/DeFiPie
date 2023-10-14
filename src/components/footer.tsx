import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-32 bg-[#23155B] rounded-tl-[250px] overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        <div className="pb-16">
          <h1 className="text-5xl font-bold w-[36%] tracking-tight leading-tight mb-4">
            <span className="text-[#8053FF] block">Join</span> Vision Capital
            and get funded
          </h1>
          <p className="font-thin mb-8">
            We'll get back to you within 24 hours
          </p>
        </div>
        <div className="flex gap-10">
          <form action="" className="grid grid-cols-2 gap-4 w-[55%]">
            <div className="flex flex-col w-full mb-3">
              <label htmlFor="" className="text-xs font-thin mb-3">
                How is yout project called?
              </label>
              <input type="text" className="p-2 rounded-md" />
            </div>
            <div className="flex flex-col w-full mb-3">
              <label htmlFor="" className="text-xs font-thin mb-3">
                Your Email
              </label>
              <input type="text" className="p-2 rounded-md" />
            </div>
            <div className="flex flex-col w-full mb-3">
              <label htmlFor="" className="text-xs font-thin mb-3">
                Please tell us a few words about the project
              </label>
              <input type="text" className="p-2 rounded-md" />
            </div>
            <div className="flex flex-col w-full mb-3">
              <label htmlFor="" className="text-xs font-thin mb-3">
                Telegram name
              </label>
              <input type="text" className="p-2 rounded-md" />
            </div>
            <input
              type="submit"
              className="bg-[#8053FF] py-3 px-6 text-sm font-thin rounded-md w-2/3 cursor-pointer"
            />
          </form>
          <div className="flex flex-col justify-end flex-grow">
            <div className="flex justify-end gap-5 mb-4">
              <div>
                <img src="/socials/facebook.png" alt="fb-logo" />
              </div>
              <div>
                <img src="/socials/twitter.png" alt="twitter-logo" />
              </div>
              <div>
                <img src="/socials/telegram.png" alt="telegram-logo" />
              </div>
              <div>
                <img src="/socials/github.png" alt="github-logo" />
              </div>
            </div>
            <div className="flex justify-end gap-5 font-light">
              <a
                href=""
                className="border-b-[1px] border-zinc-400 text-zinc-200"
              >
                hello@visioncapital.com
              </a>
              <a
                href=""
                className="border-b-[1px] border-zinc-400 text-zinc-200"
              >
                Join us on Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/background/bg-footer-left.png"
        alt="bg-texture-footer"
        className="absolute top-0 left-0 opacity-25"
      />
      <img
        src="/background/bg-footer-right.png"
        alt="bg-texture-footer"
        className="absolute bottom-0 right-0 opacity-25"
      />
    </footer>
  );
}
