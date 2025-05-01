import React from "react";
export const Navbar = () => {
  return (
    <>
    <div className="h-[80px] w-[100vw] bg-[var(--bg-color)] shadow-md content-center fixed top-0 z-10"> 



      <div className="w-full flex justify-between items-center h-full pr-5 max-w-[1400px] mx-auto">
        <img
          className="h-[100%] w-[auto] max-w-[120px] object-contain  rounded-lg ml-2"
          src="./src/assets/logo.png"
          alt="Logo"
        />

        <input type="text" className="hidden md:inline h-10 w-[40%] border border-gray-400 rounded-3xl pl-5 text-[var(--text-color)]" placeholder="Search..." />

        <div className="flex items-center">
          {" "}
          {/* Added a div for alignment */}
          <ul className="flex gap-5 hidden md:flex">
            <li className="text-[var(--text-color)]">Home</li>
            <li className="text-[var(--text-color)]">About</li>
            <li className="text-[var(--text-color)]">Contact</li>
          </ul>

          <div className="h-[50px] w-[15vw] flex gap-5 justify-between items-center md:hidden" >
            <button className="h-[20px] w-[20px] bg-[url(./src/assets/search.svg)] bg-no-repeat bg-cover cursor-pointer"></button>

            <button className="h-[20px] w-[20px] bg-[url(./src/assets/bars-solid.svg)] bg-no-repeat bg-cover cursor-pointer"></button>
          </div>
        </div>{" "}
        {/* Closing the added div */}
      </div>
    </div>
    </>
  );
};
