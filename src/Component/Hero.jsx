import React from "react";

export default function Hero() {
  return (
    <>
      <div className="h-[auto] w-[100vw] overflow-clip bg-linear-[0deg,black,#00093f,#000939_80%,black] pt-50 font-['Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif] ">
        <div className="h-[30vh] w-[100vw] grid grid-cols-1 grid-rows-[3.80rem_5rem_6vh] gap-5 justify-items-center  text-center font-['Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif]">
          <h4 className="h-15 text-center text-[transparent] bg-linear-to-r from-gray-600 to-gray-300 bg-clip-text text-5xl font-bold font-['Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif]">
            Hey There
          </h4>

          <p className=" h-auto text-gray-600 w-[70vw] text-lg font-bold tracking-wide mb-3">
            I've built this website to showcase my projects and skills
          </p>

          <a
            className=" h-11 w-auto text-gray-200 flex gap-2 font-bold items-center border p-4 rounded-lg"
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

        <div className="h-[auto] flex justify-center items-center gap-10 flex-col mt-10 pb-100">
          <h4 className="h-15 w-[90vw] text-center text-[transparent] bg-linear-to-r from-gray-700 to-gray-300 bg-clip-text text-3xl font-bold font-['Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif] animate-[var(--showly-visible)]">
            {" "}
            This website is made with
          </h4>

          {/* HTML */}
           
          <div className=" h-[auto] flex justify-center items-center  gap-10 flex-col sm:w-[90vw] sm:max-w-[1200px] sm:grid sm:grid-cols-3 sm:grid-rows-3 ">
            <div className="end_animation h-[50vh] w-[80vw] max-w-[350px] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] flex flex-col justify-around items-center sm:h-[50vh] sm:w-[auto] sm:max-w-[350px] sm:min-w-[270px]">
              <img
                className=" rotate-x-30 rotate-z-25 h-auto w-[68%] rounded-4xl border-2 border-gray-500 p-5 shadow-[14px_14px_15px_#E34F26ff] animate-[var(--dimming_effect)] "
                src="/src/assets/html.png"
                alt="HTML"
              />
              <h5 className="text_scale_effect text_up_to_down z-2 text-3xl text-[#E34F26ff] self-start ">HTML</h5>
              <p className=" text_scale_effect text-[var(--text-color)]">
                HTML (HyperText Markup Language) is the standard language used
                to create and structure content on the web.
              </p>
            </div>

            {/* css */}

            <div className="left_to_right">
            <div className=" end_animation h-[50vh] w-[80vw] max-w-[350px] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] flex flex-col justify-around items-center sm:h-[50vh] sm:w-[auto] sm:col-start-2 sm:col-end-4 sm:max-w-[770px] sm:min-w-[270px] ">
              <img
                className="right_to_left_image  rotate-x-30 rotate-z-25 h-[52%] w-[69%] rounded-4xl border-2 border-gray-500 p-3 shadow-[14px_14px_14px_#039BE5ff] "
                src="/src/assets/css.png"
                alt="CSS"
              />
              <h5 className="font-family_change text-3xl text-[#039BE5ff] self-start ">CSS</h5>
              <p className=" text-[var(--text-color)]">
                CSS (Cascading Style Sheets) is a language used to style and
                layout HTML elements on a web page—controlling colors, fonts,
                spacing, positioning, and responsiveness across devices.
              </p>
            </div>
            </div>
            {/* JavaSrc */}
        
            
            <div className="end_animation">
              <div className="right_to_left   h-[50vh] w-[80vw] max-w-[350px] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] flex flex-col justify-around items-center sm:h-[50vh] sm:w-[auto]  sm:max-w-[770px] sm:min-w-[270px] sm:col-start-1 sm:row-start-2 sm:col-end-3 ">
              <img
                className="up_to_down rotate-x-30 rotate-z-25 h-auto w-[70%] rounded-4xl border-2 border-gray-500 p-3 shadow-[14px_14px_14px_#F4E11Eff] "
                src="/src/assets/js.png"
                alt="JavaScript"
              />
              <h5 className="text_color_change text-3xl text-[#F4E11Eff] self-start ">
                JavaScript
              </h5>
              <p className=" text-[var(--text-color)]">
                JavaScript (JS) is a programming language that adds
                interactivity and dynamic behavior to websites, enabling
                features like animations, form validation, and real-time content
                updates.
              </p>
            </div>
            </div>

            {/* Tailwind */}

            <div className="bottom_to_top">
            <div className="end_animation  h-[55vh] w-[80vw] max-w-[350px] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] flex flex-col justify-around items-center sm:h-[50vh] sm:w-[30vw] sm:max-w-[330px] sm:min-w-[270px] ">
              <img
                className=" rotate-x-30 rotate-z-25 h-[45%] w-[70%] rounded-4xl border-2 border-gray-500 p-3 shadow-[14px_14px_14px_#029BE4ff] "
                src="/src/assets/tailwindcss.svg"
                alt="TailwindCSS"
              />
              <h5 className=" text-3xl text-cyan-400 self-start ">
                TailwindCSS
              </h5>
              <p className=" text-[var(--text-color)]">
                Tailwind CSS is a utility-first CSS framework that lets you
                style elements directly in your HTML using predefined classes,
                making it fast, responsive, and easy to customize without
                writing custom CSS.
              </p>
            </div>
            </div>
            
            {/* React */}
            
            <div className=" end_animation">
            <div className="stretch_animation h-[50vh] w-[80vw] max-w-[350px] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] flex flex-col justify-around items-center sm:h-[50vh] sm:w-[auto] sm:max-w-[1200px] sm:min-w-[270px] sm:col-span-3 sm:col-start-1 sm:row-start-3 sm:col-end-4 ">
              <div className=" rotate-x-30 rotate-z-25 h-auto w-[70%] rounded-4xl border-2 border-gray-500 p-5 shadow-[14px_14px_14px_#029BE4ff] ">
                <img
                className="rotate_animation"
                src="/src/assets/react.png"
                alt="React"
              /></div>
              <h5 className=" text-3xl text-cyan-400 self-start ">React</h5>
              <p className=" text-[var(--text-color)]">
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
