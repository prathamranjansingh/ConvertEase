import React from "react";

const Card = () => {
  return (
    <div className="my-20 flex flex-col md:flex-row items-center justify-center">
      <div className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
        <div className="px-8 py-10">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#63e] w-10 h-10 rounded-full group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#63e] transition-all"></div>
            <div>
              <div className="uppercase font-bold text-xl">Compress</div>
              <div className="text-gray-300 uppercase tracking-widest">
                Image
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-gray-400 mt-8">
            <p className="font-bold">Quick & Easy</p>
            <p className="flex items-center justify-center text-center">
              Compress your images in seconds
            </p>
          </div>
        </div>
        <div className="h-2 w-full bg-gradient-to-l via-slate-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
        <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-white group-hover:via-slate-500 w-[70%] m-auto rounded transition-all"></div>
      </div>

      <div className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
        <div className="px-8 py-10">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#63e] w-10 h-10 rounded-full group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#63e] transition-all"></div>
            <div>
              <div className="uppercase font-bold text-xl">Convert</div>
              <div className="text-gray-300 uppercase tracking-widest">
                Image
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-gray-400 mt-8">
            <p className="font-bold">Quick & Easy</p>
            <p className="flex items-center justify-center text-center">
              Compress your images in seconds
            </p>
          </div>
        </div>
        <div className="h-2 w-full bg-gradient-to-l via-slate-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
        <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-white group-hover:via-slate-500 w-[70%] m-auto rounded transition-all"></div>
      </div>

      <div className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
        <div className="px-8 py-10">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#63e] w-10 h-10 rounded-full group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#63e] transition-all"></div>
            <div>
              <div className="uppercase font-bold text-xl">Resize</div>
              <div className="text-gray-300 uppercase tracking-widest">
                Image
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-gray-400 mt-8">
            <p className="font-bold">Quick & Easy</p>
            <p className="flex items-center justify-center text-center">
              Compress your images in seconds
            </p>
          </div>
        </div>
        <div className="h-2 w-full bg-gradient-to-l via-slate-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
        <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-white group-hover:via-slate-500 w-[70%] m-auto rounded transition-all"></div>
      </div>
    </div>
  );
};

export default Card;
