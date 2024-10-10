import React from 'react';
import icon from '../assets/icon.webp';
const Header = () => {
  return (
    <header className="mx-auto font-manrope max-w-xl flex flex-col items-center text-center pt-16 font-alternative">
      <div className="mx-auto block size-[80px] md:size-[100px]">
        <img
          width="100"
          height="100"
          loading="lazy"
          draggable="false"
          alt="Shuttle icon"
          src={icon}
          className="-ml-2 select-none"
        />
      </div>
      <h2 className="font-bricolage font-extrabold  md:text-[6rem] text-6xl leading-none tracking-tight my-2">
        <span className="inline-block" >
        Your Images
        </span>
        <span className="inline-block">
        Your Control
        </span>
      </h2>
      <p className="text-xl font-medium leading-snug tracking-tight text-neutral-700 sm:text-2xl dark:text-neutral-300" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
      Seamless image transformation
      </p>
      <a
        style={{ opacity: 1, willChange: 'transform', transform: 'none' }}
        className="flex items-center justify-center gap-1 rounded-full px-5 py-2 font-bold transition-colors text-white bg-[#007AFF] mt-4"
        data-discover="true"
        href="/convert"
      >
        Get started for free
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right size-4"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </header>
  );
};

export default Header;
