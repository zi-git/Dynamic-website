import React from "react";
export const Navbar = () => {
  return (
    <div className="bg-[var(--bg-color)] h-17 w-lvw ">
      <div className="flex justify-between items-center h-full px-3">
        <img
          className="h-auto w-[30%]"
          src="./src/assets/logo.png"
          alt="Logo"
        />
        <div className="flex items-center">
          {" "}
          {/* Added a div for alignment */}
          <ul className="flex gap-5 hidden">
            <li className="text-[var(--text-color)]">Home</li>
            <li className="text-[var(--text-color)]">About</li>
            <li className="text-[var(--text-color)]">Contact</li>
          </ul>
          
          <div className="flex gap-5 justify-between items-center">
            
            <button className="h-5 w-[20px] bg-[url(./src/assets/search.svg)] bg-no-repeat bg-cover cursor-pointer">
            </button>
            <button className="h-5 w-[20px] bg-[url(./src/assets/bars-solid.svg)] bg-no-repeat bg-cover cursor-pointer">
            </button>
          </div>
            

        </div>{" "}
        {/* Closing the added div */}
      </div>
    </div>
  );
};
