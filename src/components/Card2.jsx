import { Link } from "react-router-dom";

export default function Card2({ name, urlImg, bgcolor, link }) {
  return (
    <div>
      <Link to={link}>
      <div
        style={{ backgroundColor: bgcolor }}
        className="w-full p-3 h-[250px] rounded-lg shadow-xl relative"
      >
        <img src={urlImg} alt=""  className="absolute w-52 right-[1.5rem] top-[-5rem]"/>
        <h1
          className="text-center text-2xl font-semibold mt-[11rem] text-slate-500"
        >
          {name}
        </h1>
      </div>
      </Link>
    </div>
  );
}
