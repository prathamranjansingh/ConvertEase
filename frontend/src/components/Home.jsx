import React from "react";
import { ArrowRight, Github, Twitter } from "lucide-react";
import Card from "./Card";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="pt-8">
        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <div className="mb-8 flex">
            <a
              href="https://github.com/ibelick/background-snippets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex">
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                  Convert The Image ⚡️
                  <span className="inline-flex items-center pl-2 text-black dark:text-white">
                    Read more{" "}
                    <ArrowRight
                      className="pl-0.5 text-black dark:text-white"
                      size={16}
                    />
                  </span>
                </div>
              </span>
            </a>
          </div>
          <h2 className="text-center text-3xl font-medium text-gray-50 sm:text-6xl">
            Transform Your Images
            <span className="animate-text-gradient inline-flex bg-gradient-to-r  bg-[200%_auto] bg-clip-text leading-tight text-transparent from-neutral-100 via-slate-400 to-neutral-400">
              with Ease
            </span>
          </h2>
          <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
            ConvertEase lets you quickly convert images, compress them, and
            perform other tasks efficiently. Our intuitive tool handles it all.
          </p>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Home;
