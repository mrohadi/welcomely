import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-4 inset-x-0 before:absolute before:inset-0 before:max-w-[90rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:border before:border-gray-200 after:absolute after:inset-0 after:-z-[1] after:max-w-[90rem] after:mx-2 after:lg:mx-auto after:rounded-[26px] after:bg-white flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav className="relative max-w-[90rem] w-full md:flex md:items-center md:justify-between md:gap-3 ps-5 pe-2 mx-2 lg:mx-auto py-2">
        {/* <!-- Logo w/ Collapse Button --> */}
        <div className="flex items-center justify-between">
          <Link
            className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
            href="/"
            aria-label="Brand"
          >
            Welcomely
          </Link>

          {/* <!-- Collapse Button --> */}
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-header-classNameic-collapse"
              aria-expanded="false"
              aria-controls="hs-header-classNameic"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-header-classNameic"
            >
              <svg
                className="hs-collapse-open:hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block shrink-0 hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
          {/* <!-- End Collapse Button --> */}
        </div>
        {/* <!-- End Logo w/ Collapse Button --> */}

        {/* <!-- Collapse --> */}
        <div
          id="hs-header-classNameic"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          aria-labelledby="hs-header-classNameic-collapse"
        >
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
              <Link
                className="p-2 flex items-center text-gray-800 hover:text-blue-500 focus:outline-none focus:text-blue-600"
                href="/"
              >
                <svg
                  className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Home
              </Link>

              <Link
                className="p-2 flex items-center text-gray-800 hover:text-blue-500 focus:outline-none focus:text-blue-600"
                href="/visit-list"
              >
                <svg
                  className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 12h.01" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
                Visit List
              </Link>

              <Link
                className="p-2 flex items-center text-gray-800 hover:text-blue-500 focus:outline-none focus:text-blue-600"
                href="/assets"
              >
                <svg
                  className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
                Asset
              </Link>

              <Link
                className="p-2 flex items-center text-gray-800 hover:text-blue-500 focus:outline-none focus:text-blue-600"
                href="/e-sik"
              >
                <svg
                  className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
                E-SIK
              </Link>

              <Link
                className="p-2 flex items-center text-gray-800 hover:text-blue-500 focus:outline-none focus:text-blue-600"
                href="/soc"
              >
                <svg
                  className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
                SOC
              </Link>

              <Link
                className="p-2 flex items-center text-gray-800 hover:text-blue-500 focus:outline-none focus:text-blue-600"
                href="/outgoing-goods"
              >
                <svg
                  className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
                Outgoing Goods
              </Link>

              {/* <!-- Button Group --> */}
              <div className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5  md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2">
                <a
                  className="p-2 w-full flex items-center text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4 me-3 md:me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Log in
                </a>
              </div>
              {/* <!-- End Button Group --> */}
            </div>
          </div>
        </div>
        {/* <!-- End Collapse --> */}
      </nav>
    </header>
  );
};

export default Navbar;
