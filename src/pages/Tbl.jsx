import { Link } from "react-router-dom";

export default function Tbl() {
  return (
    <div className="container-fluid px-28 min-h-[150vh] pt-28 text-center">
      <Link to="/product">
        <button className="bg-glass w-16 h-16 rounded-full my-10 flex items-center justify-center">
          <img src="/src/assets/img/left-arrow.png" className="w-5" alt="" />
        </button>
      </Link>
      <h1 className="my-10 font-semibold text-3xl text-center">
        Technology Based Learning
      </h1>
      <p className="text-center font-semibold text-lg text-slate-700">
        TBL (Technology Based Learning) is Saungpokki’s transformative B2B
        program that collaborates with local private schools to provide tailored
        online learning platforms. Combining the best of digital flexibility and
        structured classroom learning, TBL offers a seamless, engaging
        experience for students and empowers both students and teachers for
        success in a dynamic learning environment.
      </p>
      <p className="text-red-500 font-semibold text-center my-10 text-lg">You need to log in with a TBL account to access this page.</p>
       <button className="bg-blue-500 px-5 py-2 rounded-full font-semibold text-white hover:bg-sky-500 duration-500">Logout & Login with a TBL Account </button>
    </div>
  );
}
