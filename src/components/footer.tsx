import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-10 md:py-32 bg-[#23155B] lg:rounded-tl-[150px] overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 z-10">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
            <span className="text-[#8053FF] block">Join</span> Vision Capital
            and get funded
          </h1>
          <p className="font-thin mb-8">
            We'll get back to you within 24 hours
          </p>
        </div>
        <div className="flex flex-wrap items-end">
          <form
            action="#"
            method="post"
            className="grid md:grid-cols-2 gap-3 items-end mb-24 md:mb-0 w-full md:w-1/2"
          >
            <div className="flex flex-col w-full mb-3">
              <label htmlFor="" className="text-xs font-thin mb-3">
                How is yout project called?
              </label>
              <input type="text" className="p-2 rounded-md text-black w-full" />
            </div>
            <div className="flex flex-col w-full mb-3">
              <label htmlFor="" className="text-xs font-thin mb-3">
                Your Email
              </label>
              <input type="text" className="p-2 rounded-md text-black" />
            </div>
            <div className="flex flex-col w-full mb-3">
              <label htmlFor="" className="text-xs font-thin mb-3">
                Please tell us a few words about the project
              </label>
              <input type="text" className="p-2 rounded-md text-black" />
            </div>
            <div className="flex flex-col w-full mb-3">
              <label htmlFor="" className="text-xs font-thin mb-3">
                Telegram name
              </label>
              <input type="text" className="p-2 rounded-md text-black" />
            </div>
            <input
              type="submit"
              className="bg-[#8053FF] py-3 px-6 text-sm font-thin rounded-md cursor-pointer"
            />
          </form>
          <div className="flex flex-col justify-end flex-grow w-full md:w-1/2">
            <div className="flex justify-end gap-5 mb-4">
              <a href="">
                <img src="/socials/facebook.png" alt="fb-logo" />
              </a>
              <a href="">
                <img src="/socials/twitter.png" alt="twitter-logo" />
              </a>
              <a href="">
                <img src="/socials/telegram.png" alt="telegram-logo" />
              </a>
              <a href="">
                <img src="/socials/github.png" alt="github-logo" />
              </a>
            </div>
            <div className="flex justify-end gap-2 md:gap-5 font-light">
              <a
                href=""
                className="border-b-[1px] text-sm border-zinc-400 text-zinc-200"
              >
                hello@visioncapital.com
              </a>
              <a
                href=""
                className="border-b-[1px] text-sm border-zinc-400 text-zinc-200"
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
        className="absolute top-0 left-0 opacity-25 -z-10"
      />
      <img
        src="/background/bg-footer-right.png"
        alt="bg-texture-footer"
        className="absolute bottom-0 right-0 opacity-25 -z-10"
      />
    </footer>
  );
}
