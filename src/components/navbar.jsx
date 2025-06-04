import React from "react";

const Navbar = ({ color, themeChange }) => {
  const isColor = color === "light";

  return (
    <nav
      className={`flex justify-between p-4 my-5 border-1 max-w-[1200px] mx-auto rounded-xl ${
        isColor ? "border-black" : "border-white"
      }`}
    >
      <div>
        <span
          className={`text-3xl ${
            isColor ? "text-black" : "text-white"
          } font-medium text-center cursor-pointer`}
        >
          BillMate
        </span>
      </div>

      <div className="flex gap-2">
        <button
          className={`border-2 rounded-xl ${
            isColor ? "border-black" : "border-white"
          } px-4 py-2 hidden sm:block cursor-pointer`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 288 512"
            className={`${isColor ? "text-black" : "text-white"}`}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
          </svg>
        </button>

        <button
          onClick={themeChange}
          className={`border-2 rounded-xl ${
            isColor ? "border-black" : "border-white"
          } px-4 py-2 hidden sm:block cursor-pointer`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className={`${isColor ? "text-black" : "text-white"}`}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path>
          </svg>
        </button>

        <button className="border-2 px-3 rounded-xl py-1 bg-blue-600 cursor-pointer">
          <span className="text-white">Generate Invoice</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
