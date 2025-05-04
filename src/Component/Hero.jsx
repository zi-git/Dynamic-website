import React from "react";

export default function Hero() {


  const menuHide = () => {

    const menu = document.getElementById(`menu`);
    const list = document.getElementById(`ul_list`);
    if (window.innerWidth < 768) {
    menu.style.transform = `rotate(0deg)`;
    list.style.display = `none`;
    }
  };

  return (
    <>
      <div id="top"></div>
      <div onClick={menuHide} className="h-[auto] w-[100vw] overflow-clip bg-linear-[0deg,black,#00093f,#000939_80%,black] pt-50 font-['Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif] scroll-smooth">
        <div className=" h-[30vh] w-[100vw] grid grid-cols-1 grid-rows-[3.80rem_5rem_6vh] gap-5 justify-items-center  text-center font-['Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif] sm:grid-rows-3 sm:h-[40vh]">
          <h4  className="text_scale_fade w-auto h-25 text-center text-[transparent] bg-linear-to-r from-gray-700 to-gray-300 bg-clip-text text-7xl font-bold font-['Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif]  sm:text-[7rem]  sm:h-[15vh] sm:w-[auto] sm:text-center sm:font-medium ">
            Hey There
          </h4>

          <p className="text_scale_fade h-auto text-gray-600 w-[70vw] text-[14px] font-bold tracking-wide mb-3 sm:w-3xl sm:text-[20px] sm:tracking-wider sm:font-medium sm:mb-5">
            I've built this website to showcase my skills and the technologies I use to create responsive web applications.
          </p>

          <a
            className="text_scale_fade h-11 w-auto text-gray-200 flex gap-2 font-bold items-center border p-4 rounded-lg"
            href="https://github.com/zi-git/Dynamic-website.git"
          >
            <img
              className=" h-4.5 bg-white rounded-full"
              src="/src/assets/github.png"
              alt=""
            />
            <span>GitHub</span>
          </a>
        </div>

        <div className="  h-[auto] flex justify-center items-center gap-10 flex-col mt-10 pb-100">
          <div className="text_scale_fade"><h4 className="  h-15 w-[90vw] text-center text-[transparent] bg-linear-to-r from-gray-700 to-gray-300 bg-clip-text text-3xl font-bold font-['Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif] sm:text-5xl sm:font-medium sm:mb-10 animate-[var(--slowly-visible)]">
            {" "}
            This website is made with
          </h4></div>

         
          
          <div className=" h-[auto] flex justify-center items-center  gap-10 flex-col sm:w-[90vw] sm:max-w-[1200px] sm:grid sm:grid-cols-3 sm:grid-rows-5 ">
             
             {/* HTML */}

            <div id="Html" className="end_animation  h-[50vh] w-[80vw] max-w-[350px] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] flex flex-col justify-around items-center sm:h-[50vh] sm:w-[auto] sm:max-w-[80vw] sm:min-w-[270px] sm:col-start-1 sm:row-start-1 sm:col-end-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:flex-row sm:gap-5 snap-both">
              <img
                className=" rotate-x-30 rotate-z-25 h-auto w-[68%] rounded-4xl border-2 border-gray-500 p-5 shadow-[14px_14px_15px_#E34F26ff] animate-[var(--dimming_effect)] sm:h-[80%] sm:w-[auto] sm:col-start-1 sm:row-start-1 sm:col-end-2 sm:row-end-3 sm:justify-self-center sm:items-center sm:rotate-x-0 sm:rotate-z-0"
                src="/src/assets/html.png"
                alt="HTML"
              />
              <h5 className="text_scale_effect text_up_to_down z-2 text-3xl text-[#E34F26ff] self-start sm:self-end sm:text-5xl">HTML</h5>
              <p className=" text_scale_effect text-[var(--text-color)] sm:self-start sm:text-xl">
                HTML (HyperText Markup Language) is the standard language used
                to create and structure content on the web.
              </p>
            </div>

            {/* css */}

            <div id="Css" className="left_to_right sm:col-start-1 sm:row-start-2 sm:col-end-4 sm:row-end-3">
            <div className=" end_animation h-[50vh] w-[80vw] max-w-[350px] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] flex flex-col justify-around items-center  sm:h-[50vh] sm:w-[auto] sm:max-w-[80vw] sm:min-w-[270px]  sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:flex-row sm:gap-5 ">
              <img
                className="right_to_left_image  rotate-x-30 rotate-z-25 h-[52%] w-[69%] rounded-4xl border-2 border-gray-500 p-3 shadow-[14px_14px_14px_#039BE5ff] sm:h-[80%] sm:w-[auto] sm:col-start-2 sm:row-start-1 sm:col-end-2 sm:row-end-3 sm:justify-self-center sm:items-center sm:rotate-x-0 sm:rotate-z-0 sm:p-0"
                src="/src/assets/css.png"
                alt="CSS"
              />
              <h5 className="font-family_change text-3xl text-[#039BE5ff] self-start sm:self-end sm:text-5xl">CSS</h5>
              <p className=" text-[var(--text-color)] sm:self-start sm:text-xl">
                CSS (Cascading Style Sheets) is a language used to style and
                layout HTML elements on a web page—controlling colors, fonts,
                spacing, positioning, and responsiveness across devices.
              </p>
            </div>
            </div>
        
            {/* JavaSrc */}
            
            <div id="JavaScript" className="end_animation sm:col-start-1 sm:row-start-3 sm:col-end-4 sm:row-end-3">
              <div className="right_to_left   h-[50vh] w-[80vw] max-w-[350px] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] flex flex-col justify-around items-center  sm:h-[50vh] sm:w-[auto] sm:max-w-[80vw] sm:min-w-[270px]  sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:flex-row sm:gap-5  ">
              <img
                className="left_to_right_img rotate-x-30 rotate-z-25 h-auto w-[70%] rounded-4xl border-2 border-gray-500 p-3 shadow-[14px_14px_14px_#F4E11Eff] sm:h-[80%] sm:w-[auto] sm:col-start-1 sm:row-start-1 sm:col-end-2 sm:row-end-3 sm:justify-self-center sm:items-center sm:rotate-x-0 sm:rotate-z-0"
                src="/src/assets/js.png"
                alt="JavaScript"
              />
              <h5 className="text_color_change text-3xl text-[#F4E11Eff] self-start self-start sm:self-end sm:text-5xl">
                JavaScript
              </h5>
              <p className=" text-[var(--text-color)] sm:self-start sm:text-xl">
                JavaScript (JS) is a programming language that adds
                interactivity and dynamic behavior to websites, enabling
                features like animations, form validation, and real-time content
                updates.
              </p>
            </div>
            </div>

            {/* Tailwind */}

            <div id="Tailwind" className="end_animation sm:col-start-1 sm:row-start-4 sm:col-end-4 sm:row-end-4">
            <div className="down_to_up  h-[55vh] w-[80vw] max-w-[350px] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] flex flex-col justify-around items-center sm:h-[50vh] sm:w-[auto] sm:max-w-[80vw] sm:min-w-[270px] sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:flex-row sm:gap-5 ">
              <img
                className="up_to_down rotate-x-30 rotate-z-25 h-[45%] w-[70%] rounded-4xl border-2 border-gray-500 p-3 shadow-[14px_14px_14px_#029BE4ff] sm:h-[80%] sm:w-[80%] sm:col-start-1 sm:row-start-1 sm:col-end-2 sm:row-end-3 sm:justify-self-center sm:items-center sm:rotate-x-0 sm:rotate-z-0 "
                src="/src/assets/tailwindcss.svg"
                alt="TailwindCSS"
              />
              <h5 className=" text-3xl text-cyan-400 self-start self-start sm:self-end sm:text-5xl">
                TailwindCSS
              </h5>
              <p className=" text-[var(--text-color)] sm:self-start sm:text-xl">
                Tailwind CSS is a utility-first CSS framework that lets you
                style elements directly in your HTML using predefined classes,
                making it fast, responsive, and easy to customize without
                writing custom CSS.
              </p>
            </div>
            </div>
            
            {/* React */}
            
            <div id="React" className=" end_animation sm:col-start-1 sm:row-start-5 sm:col-end-4 sm:row-end-5">
            <div className="stretch_animation h-[50vh] w-[80vw] max-w-[350px] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] flex flex-col justify-around items-center sm:h-[50vh] sm:w-[auto] sm:max-w-[1200px] sm:min-w-[270px] sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:flex-row sm:gap-5 ">
              <div className=" rotate-x-30 rotate-z-25 h-auto w-[70%] rounded-4xl border-2 border-gray-500 p-5 shadow-[14px_14px_14px_#029BE4ff] sm:h-[auto] sm:w-[60%] sm:col-start-1 sm:row-start-1 sm:col-end-2 sm:row-end-3 sm:justify-self-center sm:items-center sm:rotate-x-0 sm:rotate-z-0 ">
                <img
                className="rotate_animation "
                src="/src/assets/react.png"
                alt="React"
              /></div>
              <h5 className=" text-3xl text-cyan-400 self-start self-start sm:self-end sm:text-5xl">React</h5>
              <p className=" text-[var(--text-color)] sm:self-start sm:text-xl">
                React is a JavaScript library for building user interfaces,
                especially single-page applications, using reusable components
                and a virtual DOM for efficient updates.
              </p>
            </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
