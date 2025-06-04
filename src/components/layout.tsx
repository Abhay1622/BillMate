
export const Homepage = () => {
    return (
        <div className="flex flex-col gap-4 max-w-[620px] mx-auto my-[6rem]">
            <div className=" text-center">
                <span className="bg-black text-white rounded-xl p-1">Trusted by 💙 10000+ freelancers</span>
            </div>
            <div className="text-center"><span className="text-6xl text-white">Create Invoices in <span className="text-blue-500">minutes</span> not In hours</span></div>
            <div className="text-center text-white"><span className="">A Simple Invoice Generator for Freelancers and Businesses and enterprises. Effortlessly create, manage, and send professional invoices.</span></div>
            <div>
                <div className="flex flex-row gap-5 justify-center">
                    <button className="text-white bg-blue-500 rounded-lg sm:px-5 px-3 py-1.5 flex items-center justify-center gap-4 group transition-all duration-300"><span className="transition-transform duration-300 group-hover:translate-x-2 sm:text-lg text-md font-semibold"><a href="/generate">Get Started</a></span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-sm opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>

                    <a><button className="text-white hover:underline hover:text-blue-500 cursor-pointer my-1">Try for free</button></a>
                </div>
            </div>
        </div>
    )
}


export const Card = () => {
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
        <div className="text-center text-white font-semibold text-lg">Multi-Currency Support</div>
        <div className="flex justify-center gap-4">
          <div>
            <button className="px-4 py-2 rounded-lg border border-gray-600 bg-blue-700/20">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-blue-500/80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="..."></path>
              </svg>
            </button>
          </div>
          <div>
            <button className="px-4 py-2 rounded-lg border border-gray-600 bg-blue-700/20">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 288 512" className="text-blue-500/80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="..."></path>
              </svg>
            </button>
          </div>
          <div>
            <button className="px-4 py-2 rounded-lg border border-gray-600 bg-blue-700/20">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-blue-500/80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="..."></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
