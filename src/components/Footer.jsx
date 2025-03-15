export default function footer() {
  return (
    <div>
      <div className="container-fluid px-28 bg-sky-200 h-[100vh]">
        <div className="grid grid-cols-4 pt-28">
          <div>
            <h1 className="text-xl font-semibold">Main Product</h1>
            <div className="*:text-md mt-5 *:mt-1">
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                Face To Face
              </p>
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                ILBC Quick Learn
              </p>
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                PLC
              </p>
            </div>
            <h1 className="text-xl font-semibold mt-14">Social</h1>
            <div className="*:text-md mt-5 *:mt-1">
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                Facebook
              </p>
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                Telegram
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Company</h1>
            <div className="*:text-md mt-5 *:mt-1">
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                Privacy Policy
              </p>
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                Terms of use
              </p>
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                About Us
              </p>
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                User guide
              </p>
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                FAQs
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Contact</h1>
            <div className="*:text-md mt-5 *:mt-1">
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                09777450999
              </p>
              <p className="hover:underline duration-500 cursor-pointer hover:text-blue-500 font-semibold text-slate-500">
                Saungpokki@ilbc.edu.mm
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Avliable On</h1>
            <div className="*:text-md mt-5 *:mt-1">
              <button className="bg-glass py-2 px-3 flex items-center font-semibold rounded-lg hover:bg-gray-200 duration-500">
                <img
                  src="/src/assets/img/play.jpg"
                  className="w-10 mr-3 rounded-lg"
                  alt=""
                />
                Playstore
              </button>
              <button className="bg-glass py-2 px-3 flex items-center font-semibold rounded-lg hover:bg-gray-200 duration-500">
                <img
                  src="/src/assets/img/appst.png"
                  className="w-10 mr-3 rounded-lg"
                  alt=""
                />
                Appstore
              </button>
              <img className="pt-10" src="/src/assets/img/QR.webp" alt="" />
              <h1 className="text-xl pt-3 font-semibold">Scan To Download</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70px] bg-blue-300 px-28 flex items-center justify-between">
         <div className="flex items-center">
            <img src="/src/assets/img/images.png" className="w-48" alt="" />
            <p className="font-semibold ml-5">©2025 All rights reserved.</p>
         </div>
         <div className="flex items-center">
            <img src="/src/assets/img/k pay 2.webp" alt="" />
            <img src="/src/assets/img/ayapay1.webp" className="ml-3" alt="" />
            <img src="/src/assets/img/MPU1.webp" className="ml-3" alt="" />
            <img src="/src/assets/img/Mastercard1.webp" className="ml-3" alt="" />
            <img src="/src/assets/img/visa1.webp" className="ml-3" alt="" />
         </div>
      </div>
    </div>
  );
}
