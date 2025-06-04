
export const Homepage = ({color}) => {
  const isColor = color === 'light'
    return (
        <div className="flex flex-col gap-4 max-w-[620px] mx-auto my-[6rem]">
      <div className="text-center">
        <span className={`rounded-xl px-4 py-2 ${isColor ? "bg-black text-white" : "bg-white text-black"}`}>
          Trusted by 💙 10000+ freelancers
        </span>
      </div>
      <div className="text-center">
        <span className={`text-6xl ${isColor ? "text-black" : "text-white"}`}>
          Create Invoices in <span className="text-blue-500">minutes</span> not In hours
        </span>
      </div>
      <div className={`text-center ${isColor ? "text-black" : "text-white"}`}>
        <span>
          A Simple Invoice Generator for Freelancers and Businesses and enterprises.
          Effortlessly create, manage, and send professional invoices.
        </span>
      </div>
      <div>
        <div className="flex flex-row gap-5 justify-center">
          <button className="text-white bg-blue-500 rounded-lg sm:px-5 px-3 py-1.5 flex items-center justify-center gap-4 group transition-all duration-300">
            <span className="transition-transform duration-300 group-hover:translate-x-2 sm:text-lg text-md font-semibold">
              <a href="#">Get Started</a>
            </span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-sm opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </button>

          <a>
            <button className={`hover:underline cursor-pointer my-1 ${isColor ? "text-black hover:text-blue-500" : "text-white hover:text-blue-500"}`}>
              Try for free
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};


export const Card = ({color}) => {
  const isColor = color === "light";
  return (
    <div className="flex flex-col">
      <div className="flex justify-center gap-12 group">
        <div className="xl:w-1/6 lg:w-1/4 md:w-1/3 w-1/8 sm:block rotate-[-10deg] transition-transform duration-300 group-hover:rotate-[-20deg] opacity-40">
          <div className="rounded-xl bg-blue-600 p-4 w-full">
            <div className="flex items-center justify-between gap-2 h-20">
              <div className="flex items-center gap-2 flex-col w-[50%] h-full">
                <div className="bg-blue-400 w-full rounded-xl h-full"></div>
                <div className="bg-blue-400 w-full rounded-xl h-full"></div>
              </div>
              <div className="bg-blue-400 w-[50%] h-full rounded-xl"></div>
            </div>
            <div className="bg-blue-400 w-full rounded-xl h-8 mt-2"></div>
            <div className="bg-blue-400 w-full h-8 rounded-xl py-2 mt-2"></div>
            <div className="bg-blue-400 w-full h-8 rounded-xl py-2 mt-2"></div>
            <div className="bg-blue-400 w-full rounded-xl h-20 mt-2 flex items-end">
              <div className="bottom-0 py-2 px-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 288 512" className="text-white text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="..."></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-1/6 lg:w-1/4 md:w-1/3 w-[65%] z-30 absolute transition-transform duration-300 group-hover:translate-y-[-10px]">
          <div className="rounded-xl bg-blue-600 p-4 w-full">
            <div className="flex items-center justify-between gap-2 h-20">
              <div className="flex items-center gap-2 flex-col w-[50%] h-full">
                <div className="bg-blue-400 w-full rounded-xl h-full"></div>
                <div className="bg-blue-400 w-full rounded-xl h-full"></div>
              </div>
              <div className="bg-blue-400 w-[50%] h-full rounded-xl"></div>
            </div>
            <div className="bg-blue-400 w-full rounded-xl h-8 mt-2"></div>
            <div className="bg-blue-400 w-full h-8 rounded-xl py-2 mt-2"></div>
            <div className="bg-blue-400 w-full h-8 rounded-xl py-2 mt-2"></div>
            <div className="bg-blue-400 w-full rounded-xl h-20 mt-2 flex items-end">
              <div className="bottom-0 py-2 px-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-white text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="..."></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-1/6 lg:w-1/4 md:w-1/3 w-1/3 hidden sm:block rotate-[10deg] transition-transform duration-300 group-hover:rotate-[20deg] opacity-40">
          <div className="rounded-xl bg-blue-600 p-4 w-full">
            <div className="flex items-center justify-between gap-2 h-20">
              <div className="flex items-center gap-2 flex-col w-[50%] h-full">
                <div className="bg-blue-400 w-full rounded-xl h-full"></div>
                <div className="bg-blue-400 w-full rounded-xl h-full"></div>
              </div>
              <div className="bg-blue-400 w-[50%] h-full rounded-xl"></div>
            </div>
            <div className="bg-blue-400 w-full rounded-xl h-8 mt-2"></div>
            <div className="bg-blue-400 w-full h-8 rounded-xl py-2 mt-2"></div>
            <div className="bg-blue-400 w-full h-8 rounded-xl py-2 mt-2"></div>
            <div className="bg-blue-400 w-full rounded-xl h-20 mt-2 flex items-end">
              <div className="bottom-0 py-2 px-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-white text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="..."></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-8 py-16">
        <div className={`text-center ${isColor ? "text-black" : "text-white"} font-semibold text-lg`}>Multi-Currency Support</div>
        <div className="flex justify-center gap-4">
          <div>
            <button className="px-4 py-2 rounded-lg border border-gray-600 bg-blue-700/20"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-blue-500/80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg></button>
          </div>
          <div><button className="px-4 py-2 rounded-lg border border-gray-600 bg-blue-700/20"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 288 512" className="text-blue-500/80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path></svg></button></div>
          <div>
            <div><button className="px-4 py-2 rounded-lg border border-gray-600 bg-blue-700/20"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-blue-500/80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z"></path></svg></button></div>
          </div>
        </div>
      </div>
    </div>
  );
};
