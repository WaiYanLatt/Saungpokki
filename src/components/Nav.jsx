import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [Openlag, setOpenlag] = useState("false");

  const toggleOpenlag = () => {
    setOpenlag((prev) => (prev === "true" ? "false" : "true"));
  };

  return (
    <div className="w-full px-32 flex justify-between py-3 bg-glass border-b border-sky-500 z-[100] fixed top-0">
      <img src="/src/assets/img/images.png" className="w-26" alt="" />
      <div className="flex justify-center items-center *:px-5 *:font-semibold *:uppercase *:cursor-pointer *:text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-500 duration-500 ${
              isActive ? "text-blue-500 font-bold underline" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            `hover:text-blue-500 duration-500 ${
              isActive ? "text-blue-500 font-bold underline" : ""
            }`
          }
        >
          Product
        </NavLink>
        <p className="hover:text-blue-500 duration-500">Level Check</p>
        <p className="hover:text-blue-500 duration-500">Faq</p>
        <p className="hover:text-blue-500 duration-500">News</p>
        <button
          onClick={toggleOpenlag}
          className="px-3 py-1 border-2 rounded-full flex items-center"
        >
          <img
            src="/src/assets/img/images.jfif"
            alt=""
            srcset=""
            className="w-6 h-5 mr-3"
          />
          English
          {Openlag === "false" && (
            <img
              src="/src/assets/img/angle-down.svg"
              className="w-10 pl-2"
              alt=""
              srcset=""
            />
          )}
          {Openlag === "true" && (
            <img
              src="/src/assets/img/angle-right.svg"
              className="w-10 pl-2"
              alt=""
              srcset=""
            />
          )}
        </button>
        <div className="bg-gray-200 ml-5 border-[1px] border-slate-500 rounded-full cursor-pointer hover:bg-slate-300 duration-500">
          <img
            src="/src/assets/img/user.svg"
            alt=""
            srcset=""
            className="w-3 py-5"
          />
        </div>
        {Openlag === "true" && (
          <div className="bg-white absolute top-[4.2rem] right-[13rem] rounded-md shadow-xl py-3">
            <div className="flex items-center font-semibold hover:bg-slate-200 transtion-all duration-500 p-2 cursor-pointer rounded-lg">
              <img
                src="/src/assets/img/images.jfif"
                alt=""
                srcset=""
                className="w-6 h-5 mr-2"
              />
              English
            </div>
            <div className="flex items-center font-semibold mt-1 p-2 cursor-pointer transtion-all duration-500 rounded-lg hover:bg-slate-200">
              <img
                src="/src/assets/img/myanmar.png"
                alt=""
                srcset=""
                className="w-6 h-5 mr-2"
              />
              Myanmar
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
