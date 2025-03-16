import { useState } from "react";

export default function Card({
  name,
  age,
  modules,
  months,
  url,
  dis,
  Width,
  color,
  bgcolor2,
  marginLeft,
}) {
  const [heartActive, setheartActive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const toggleheartActive = () => {
    if (!heartActive) {
      // Only show the message when adding to favorites
      setheartActive(true);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 1000);
    } else {
      setheartActive(false); // Remove from favorites without showing the message
    }
  };

  return (
    <div>
      <div
        onMouseEnter={() => setShowContent(false)}
        onMouseLeave={() => setShowContent(true)}
        className="rounded-xl shadow-md p-2 relative cursor-pointer"
        style={{ backgroundColor: color }}
      >
        <div onClick={toggleheartActive} className="absolute right-3">
          {heartActive === false && (
            <img
              src="/src/assets/img/heart.png"
              className="w-7 cursor-pointer"
              alt=""
            />
          )}
          {heartActive === true && (
            <img
              src="/src/assets/img/heart1.png"
              className="w-7 cursor-pointer"
              alt=""
            />
          )}
        </div>
        <img
          src={url}
          alt=""
          style={{ width: Width, marginLeft: marginLeft }}
          className="mt-5"
        />
        <div
          style={{ backgroundColor: bgcolor2 }}
          className="p-3 rounded-lg shadow-md relative duration-500"
        >
          <button className="absolute bg-purple-500 px-5 py-2 font-semibold text-white rounded-full top-[-1rem] right-3">
            One-to-Many
          </button>
          <h1 className="font-semibold text-lg mt-7">{name}</h1>
          {showContent === true && (
            <div>
              <h1 className="mt-3 flex items-center font-semibold text-slate-700">
                <img
                  src="/src/assets/img/user1.png"
                  alt=""
                  className="w-7 mr-3"
                />
                Age : {age}
              </h1>
              <h1 className="mt-1 flex items-center font-semibold text-slate-700">
                <img
                  src="/src/assets/img/book1.png"
                  alt=""
                  className="w-7 mr-3"
                />
                {modules}
              </h1>
              <h1 className="mt-1 flex items-center font-semibold text-slate-700">
                <img
                  src="/src/assets/img/calender.png"
                  alt=""
                  className="w-7 mr-3"
                />
                {months}
              </h1>
            </div>
          )}
          {showContent === false && (
            <div>
              <h1 className="mt-5 flex items-center font-semibold text-slate-700">
                {dis}
              </h1>
              <button className="w-full bg-blue-500 text-white mt-5 py-2 rounded-full hover:bg-sky-500 font-semibold">
                Go To Course
              </button>
            </div>
          )}
        </div>
        {showMessage && (
          <div className="bg-glass text-green-500 py-1 mt-1 px-5 text-center rounded-md shadow-lg">
            <h1 className="font-semibold">Successfully Added</h1>
          </div>
        )}
      </div>
    </div>
  );
}
