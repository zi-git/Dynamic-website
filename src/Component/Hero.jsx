import React from "react";

export default function Hero() {
  return (
    <>
      <div className="h-[auto] w-[100vw] bg-linear-[0deg,black,#00093f,#000939_80%,black] pt-50 font-['Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif]">
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
        <div className="h-[auto] flex justify-center items-center gap-10 flex-col mt-10">
          <h4 className="h-15 w-[90vw] text-center text-[transparent] bg-linear-to-r from-gray-600 to-gray-300 bg-clip-text text-3xl font-bold font-['Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif]">
            {" "}
            This website is made with
          </h4>

          <div className="h-[auto] flex justify-center items-center  gap-10 flex-col">
            <div className=" h-[50vh] w-[80vw] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] flex flex-col justify-around items-center">
              <img className=" rotate-x-30 rotate-z-25 h-auto w-[68%] rounded-4xl border-2 border-gray-500 p-5 shadow-[14px_14px_15px_#E34F26ff] "  src="/src/assets/html.png" alt="HTML" />
              <h5 className=" text-3xl text-[#E34F26ff] self-start ">HTML</h5>
              <p className=" text-[var(--text-color)]">HTML (HyperText Markup Language) is the standard language used to create and structure content on the web.</p>
            </div>

            <div className=" h-[50vh] w-[80vw] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] ">
              <img src="/src/assets/" alt="" /> <h5>html</h5>
              <p>00000000</p>
            </div>
            <div className=" h-[50vh] w-[80vw] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] ">
              <img src="/src/assets/" alt="" /> <h5>html</h5>
              <p>00000000</p>
            </div>
            <div className=" h-[50vh] w-[80vw] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] ">
              <img src="/src/assets/" alt="" /> <h5>html</h5>
              <p>00000000</p>
            </div>
            <div className=" h-[50vh] w-[80vw] bg-[#00000079] rounded-2xl shadow-[0px_0px_10px_indigo] p-[20px] ">
              <img src="/src/assets/" alt="" /> <h5>html</h5>
              <p>00000000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
