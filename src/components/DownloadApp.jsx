export default function DownloadApp() {
  return (
    <div className="container-fluid px-28 bg-[#fff2e3] h-[100vh] relative">
      <div className="pt-24">
        <div className="w-[650px]">
          <h1 className="font-semibold text-5xl">ILBC Quick Learn App</h1>
          <p className="mt-14 font-semibold text-lg text-slate-700">
            This is a free online learning platform for mastering language and
            exploring other fascinating categories relevant to everyday life.
            ILBC Quick Learn features hundreds to thousands of short videos,
            accessible on both web and mobile versions. There are no limitations
            or restrictions to access this free learning resource. Whether
            you're on the bus, at home, or anywhere else, you can freely watch
            these videos. ILBC Quick Learn is designed to be your on-the-go
            learning companion, facilitating the acquisition of language skills
            at your convenience.
          </p>
          <div className="mt-10 flex items-center ">
            <img src="/src/assets/img/appst.png" className="w-16 cursor-pointer mr-5" alt="" />
            <img src="/src/assets/img/play.jpg" className="w-16 rounded-lg cursor-pointer " alt="" />
          </div>
        </div>
      </div>
      <img src="/src/assets/img/quicklearnmobile.webp" className="absolute right-[4rem] top-[-7rem]" alt="" />
    </div>
  );
}
