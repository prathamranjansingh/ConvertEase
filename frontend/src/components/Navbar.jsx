import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ConvertEase
            </span>
          </a>

          <div className="hidden sm:flex items-center ml-8">
            <ul className="font-medium flex flex-row items-center space-x-4 lg:space-x-6">
              <li>
                <a
                  href="/compress"
                  className="block py-2 px-2 lg:px-4 rounded text-white hover:text-white">
                  Compress
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-2 lg:px-4 rounded text-white hover:text-white">
                  Resize
                </a>
              </li>
              <li>
                <a
                  href="/conversion"
                  className="block py-2 px-2 lg:px-4 rounded text-white hover:text-white">
                  Convert
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
