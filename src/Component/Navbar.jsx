import React, { useState } from "react";
export const Navbar = () => {
  const alert = () => {
    window.alert(`This function will be availabe soon !`);
  };

  const [menu_toggle, SetMenu_toggle] = useState(false);
  const handle_menu = (e) => {
    console.log(menu_toggle);
    const menu = e.target;
    const list = document.getElementById(`ul_list`);
    if (menu_toggle) {
      menu.style.transform = `rotate(0deg)`;
      list.style.display = `none`;
      SetMenu_toggle(false);
    } else {
      menu.style.transform = `rotate(90deg)`;
      list.style.display = `block`;
      SetMenu_toggle(true);
    }
  };

  const menuHide = () => {

    const list = document.getElementById(`ul_list`);
    menu.style.transform = `rotate(0deg)`;
    list.style.display = `none`;
  };

  return (
    <>
      <div
        
        className="h-[80px] w-[100vw] bg-[var(--bg-color)] shadow-md content-center fixed top-0 z-10"
      >
        <div className="w-full flex justify-between items-center h-full pr-5 max-w-[1400px] mx-auto">
          <img
            className="h-[100%] w-[auto] max-w-[120px] object-contain  rounded-lg ml-2"
            src="./src/assets/logo.png"
            alt="Logo"
          />
          <input
            type="text"
            className="hidden md:inline h-10 w-[40%] border border-gray-400 rounded-3xl pl-5 text-[var(--text-color)]"
            placeholder="Search..."
          />
          <div className="flex items-center">
            {" "}
            {/* Added a div for alignment */}
            <ul
              id="ul_list"
              className="  hidden  absolute top-[80px] right-4 bg-linear-45 from-gray-900 to-gray-700 text-[14px] text-[--text-color] font-['Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif] p-3 rounded-xl sm:flex sm:gap-5 sm:font- sm:static sm:bg-none sm:text-[1rem]"
            >
              <a href="#top">
                {" "}
                <li className="text-gray-400 h-[auto] bg-gray-700 text-center p-1 sm:bg-transparent sm:p-0 sm:text-start rounded-md">
                  Top
                </li>
              </a>
              <a href="#bottom">
                <li className="text-gray-400 h-[auto] bg-gray-700 p-1 px-2 text-center rounded-md mt-2 sm:bg-transparent sm:p-0 sm:text-start sm:px-0 sm:m-0">
                  Bottom
                </li>
              </a>
            </ul>
            <div className="h-[50px] w-[15vw] flex gap-5 justify-between items-center md:hidden">
              <button
                className="h-[20px] w-[20px] bg-[url(./src/assets/search.svg)] bg-no-repeat bg-cover cursor-pointer"
                onClick={alert}
              ></button>

              <button
                id="menu"
                className="h-[20px] w-[20px] bg-[url(./src/assets/bars-solid.svg)] bg-no-repeat bg-cover cursor-pointer"
                onClick={handle_menu}
              ></button>
            </div>
          </div>{" "}
          {/* Closing the added div */}
        </div>
      </div>
    </>
  );
};
