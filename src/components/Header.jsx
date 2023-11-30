import React from "react";
// import logo from "../assets/logo.png";

const Header = () => {
  return (
      <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          {/* <img src="image/logo.png" alt="Logo" className="object-contain hover:object-scale-down"/> */}
          <h1 className="text-4xl">ᑭᖇIᑎᑕE</h1>
            {/* <svg
              xmlns="image/logo.png"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
            </svg> */}
          </a>

        </div>
      </header>
    </>
  );
};

export default Header;
