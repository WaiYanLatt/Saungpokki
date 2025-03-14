export default function HomeSection() {
  return (
    <div className="bg-gradient-to-r from-[#f6f0fc] to-[#ebf4f8] w-full h-[100vh] ">
      <div className="container mx-auto px-24 flex items-center justify-between">
        <div>
          <h1 className="text-[30px] font-semibold">
            Start Your Learning with
          </h1>
          <h1 className="text-[70px] font-semibold">Saungpokki</h1>
          <h1 className="text-[30px] font-semibold text-slate-500">
            Powered by ILBC
          </h1>
          <div className="mt-5 flex item-center">
            <button className="bg-blue-500 py-3 px-5 rounded-full text-white font-semibold hover:bg-sky-500 duration-300">
              Go To Dashboard
            </button>
            <button className="border ml-5 py-3 px-5 rounded-full hover:bg-slate-300 duration-500">
              <div className="flex items-center">
                <img
                  src="/src/assets/img/video-file.svg"
                  alt=""
                  className="w-5 mr-3"
                />
                <p className="font-semibold text-black"> Watch video</p>
              </div>
            </button>
          </div>
        </div>
        <div className="pt-28">
          <img
            src="./src/assets/img/user.webp"
            className="w-full h-[480px]"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="absolute top-[85vh]">
        <img
          src="/src/assets/img/wave-v2.699c6f74.svg"
          alt=""
          className="w-full h-[350px]"
        />
      </div>
    </div>
  );
}
