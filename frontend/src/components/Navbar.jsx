const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 px-4 font-manrope text-sm font-extrabold bg-black/80">
      <div className="mx-auto flex max-w-xl items-center border-b border-white/10 ">
        <h1 className="text-lg">
          <a  href="/" className="py-4 font-bricolage">
            ConvertEase
          </a>
        </h1>
        <ul className="-mx-4 flex flex-1 items-center justify-end text-neutral-200 ">
          <li>
            <a
              data-discover="true"
              className="label block p-4 opacity-70 transition-opacity hover:opacity-60 aria-[current=page]:opacity-100"
              href="/compress"
            >
              Compress
            </a>
          </li>
          <li>
            <a
              data-discover="true"
              className="label block p-4 opacity-70 transition-opacity hover:opacity-60 aria-[current=page]:opacity-100"
              href="/resize"
            >
              Resize
            </a>
          </li>
          <li>
            <a
              data-discover="true"
              className="label block p-4 opacity-70 transition-opacity hover:opacity-60 aria-[current=page]:opacity-100"
              href="/convert"
            >
             Convert
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
