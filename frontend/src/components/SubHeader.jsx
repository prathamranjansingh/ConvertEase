import file1 from "../assets/file-1.webp";
import file2 from "../assets/file-3.webp";
import file3 from "../assets/file-5.webp";
import file4 from "../assets/file-6.webp";
import wallpaperBlurredPng from "../assets/wallpaper-blurred-dark.png";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const SubHeader = () => {
  return (
    <section className="mb-28">
      <div className="relative py-24 md:py-32">
        <picture className="absolute inset-0 -z-1">
          <img
            loading="lazy"
            draggable="false"
            src={wallpaperBlurredPng}
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="px-4">
          <div className="relative mx-auto flex h-[520px] w-[980px] gap-2">
            <aside className="flex w-full flex-shrink-0 max-w-[260px] flex-col gap-4 rounded-3xl backdrop-saturate-200 backdrop-blur-3xl p-6 text-sm  shadow-app border-black bg-neutral-900/80 text-neutral-200">
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-2">
                  <picture>
                    <img
                      alt="Avatar Palet"
                      src={avatar}
                      className="size-8 overflow-hidden rounded-full"
                    />
                  </picture>
                  <span className="block w-full flex-1 text-base font-bold">
                    ConvertEase
                  </span>
                </div>
                <p className="text-neutral-400">
                  Transform Your Images Effortlessly! Our website offers
                  powerful tools to compress, resize, and convert images quickly
                  and easily, ensuring optimal quality and performance for all
                  your creative projects.
                </p>
              </div>
              <ul className="text-neutral-400">
                <li className="flex items-center gap-2 rounded-xl p-2 hover:bg-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-globe"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  Website
                </li>
                <li className="flex items-center gap-2 rounded-xl p-2 hover:bg-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  </svg>
                  Terms & services
                </li>
              </ul>
            </aside>

            <div className="flex flex-1 flex-col rounded-3xl shadow-app backdrop-blur-3xl backdrop-saturate-200 bg-neutral-900/80">
              <header className="flex justify-between px-8 py-4">
                <span className="text-base font-bold">Transform Image</span>
                <ul className="flex items-center gap-2 text-neutral-500">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-folder-plus"
                    >
                      <path d="M12 10v6"></path>
                      <path d="M9 13h6"></path>
                      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                    </svg>
                  </li>
                </ul>
              </header>
              <div className="grid grid-cols-4 flex-col items-start justify-start gap-6 gap-y-12 p-8">
                <div className="cursor-default text-center">
                  <picture>
                    <img
                      alt="Branding"
                      className="mx-auto h-[100px] rounded-2xl border-2 border-transparent"
                      src={file1}
                    />
                  </picture>
                  <div>
                    <span className="mt-2 block text-sm text-neutral-400">
                      Branding
                    </span>
                    <span className="block text-xs text-neutral-400">
                      218 items
                    </span>
                  </div>
                </div>
                <div className="cursor-default text-center">
                  <picture>
                    <img
                      alt="Typography"
                      className="mx-auto h-[100px] rounded-2xl border-2 border-transparent"
                      src={file1}
                    />
                  </picture>
                  <div>
                    <span className="mt-2 block text-sm text-neutral-400">
                      Typography
                    </span>
                    <span className="block text-xs text-neutral-400">
                      48 items
                    </span>
                  </div>
                </div>
                <div className="cursor-default text-center">
                  <picture>
                    <img
                      alt="Terms...itions.pdf"
                      className="mx-auto h-[100px] rounded-2xl border-2 border-transparent"
                      src={file1}
                    />
                  </picture>
                  <div>
                    <span className="mt-2 block text-sm text-neutral-400">
                      Terms...itions.pdf
                    </span>
                    <span className="block text-xs text-neutral-400">
                      9/10/28 8:39PM
                    </span>
                  </div>
                </div>
                <div className="cursor-default text-center">
                  <picture>
                    <img
                      alt="DSC_0002.JPG"
                      className="mx-auto h-[100px] rounded-2xl border-2 border-transparent"
                      src={file3}
                    />
                  </picture>
                  <div>
                    <span className="mt-2 block text-sm text-neutral-400">
                      DSC_0002.JPG
                    </span>
                    <span className="block text-xs text-neutral-400">
                      9/5/22 7:19PM
                    </span>
                  </div>
                </div>
                <div className="cursor-default text-center">
                  <picture>
                    <img
                      alt="DSC_0003.JPG"
                      className="mx-auto h-[100px] rounded-2xl border-2 border-transparent"
                      src={file4}
                    />
                  </picture>
                  <div>
                    <span className="mt-2 block text-sm text-neutral-400">
                      DSC_0003.JPG
                    </span>
                    <span className="block text-xs text-neutral-400">
                      9/5/22 7:19PM
                    </span>
                  </div>
                </div>
                <div className="cursor-default text-center">
                  <picture>
                    <img
                      alt="Team.webp"
                      className="mx-auto h-[100px] rounded-2xl border-2 border-transparent"
                      src={file2}
                    />
                  </picture>
                  <div>
                    <span className="mt-2 block text-sm  text-neutral-400">
                      Team.webp
                    </span>
                    <span className="block text-xs text-neutral-400">
                      9/5/22 7:19PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative font-manrope mx-auto max-w-[980px] px-4">
        <div className="mx-auto flex max-w-full flex-col items-center text-center font-alternative sm:max-w-[560px]">
          <h3 className="mb-2 text-5xl font-bricolage font-extrabold">Transform Your Images with Ease!</h3>
          <p className="text-2xl text-zinc-300 font-semibold">
          From compressing to resizing and converting, you can optimize your images your way.
          </p>
          <Link
            to="/compress"
            
          >
            <Button className="flex items-center justify-center gap-1 mt-14">
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
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
