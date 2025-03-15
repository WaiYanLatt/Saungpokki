import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
// import "swiper/css/pagination"; // For pagination
// import "swiper/css/navigation"; // For navigation

export default function Testmonial() {
  const [slides] = useState([
    {
      id: 1,
      name: "Nyi Nyi Hla",
      img: "/src/assets/img/user.png",
      review:
        "live class ဖြစ်လို့ သင်ရင်းနဲ့ ဆရာမတွေရဲ့ အကြုံပြုချက်တွေကို တိုက်ရိုက်ကြားနိုင် လေ့လာနိုင်တာက အားသာချက်တစ်ခုပါ.. တစ်ယောက်ချင်းဆီအတွက်လဲ အသံထွက်၊ grammarကအစ English စာကိုပြောရဲလာ‌‌အောင် အချိန်ပေး လေ့ကျင်ပေးတာမို့ အချိန်တိုအတွင်း တိုးတက်လာတယ်လို့ ခံစားရတာကြောင့်.... review လေးရေးလိုက်ပါတယ်။",
    },
    {
      id: 2,
      name: "Andrey Chitsu ",
      img: "/src/assets/img/user.png",
      review:
        "Andrey အနေနဲ့သင်ယူရတာအဆင်ပြေတယ်ရှင့် ကိုယ်ကမနက်ပိုင်းရုံးတက်ညနေပိုင်းဆိုအိမ်ပြန်ရောက်ပြီး ပေါ့ပေါ့ပါးပါးနဲ့အိမ်မှာပဲonlineသင်ရတော့အချိန်ကုန်သက်သာတယ်။ဆရာမတေနဲ့အတန်းဖော်တေနဲ့လဲတူတူသင်ကြားရတာပျော်ဖို့ကောင်းတယ်ရှင့်။ ",
    },
    {
      id: 3,
      name: "Rexyy ",
      img: "/src/assets/img/user.png",
      review:
        "I like the learning experience with this app's flexible curriculum. There are helpful teachers who keep me on track in case I miss a session. The lessons are also well-structured, easy to follow, and ideal for busy schedules. Fantastic.!! ",
    },
    {
      id: 4,
      name: "Daw Lay Lay Khin ",
      img: "/src/assets/img/user.png",
      review:
        "ကလေးတွေအတွက် အင်္ဂလိပ်စာသင်တန်းကောင်းကောင်း ရှာနေတဲ့မိဘတွေအတွက် ရွေးချယ်စရာသင်တန်းကောင်း တစ်ခုပါ။ အိမ်ကကလေး စိတ်ဝင်တစားနဲ့ ကြိုးစားပြီးသင်နေတာမြင်ရတော့ ဝမ်းသာရပါတယ် ",
    },
    {
      id: 5,
      name: "Kyaw Zin Nyein",
      img: "/src/assets/img/user.png",
      review:
        "ကလေးတွေပါမက ကျွန်တော်တို့လိုလူကြီးတွေအတွက်ပါ လွယ်လွယ်ကူကူသင်လို့ရတော့ အရမ်းကိုအဆင်ပြေပါတယ်ဗျာ  Highly Recommend ပါဗျာ",
    },
    {
      id: 6,
      name: "Myat Lynn Ko Ko",
      img: "/src/assets/img/user.png",
      review:
        "I really love Saungpokki and the teachers who are friendly and kind. I believe that you will be feeling like me, and it is more than just an English class. It is just a good environment for learning English. ✅✅💯💯",
    },
  ]);

  return (
    <div className="bg-slate-100 container-fulid h-[190vh]">
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-semibold">Testimonials</h1>
        <h1 className="text-5xl font-semibold mt-5">Our Students Feedback</h1>
        <Swiper
          // modules={[Navigation, Pagination]}
          //   navigation
          //   pagination={{ clickable: true }}
          loop={true} // Enables infinite scrolling
          centeredSlides={true} // Centers the active slide
          //spaceBetween={0} // Gap between slides
          slidesPerView={1} // Default for mobile
          autoplay = {true}
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 2 slides on screens >= 640px
            },
            1024: {
              slidesPerView: 3, // Show 3 slides on screens >= 1024px
            },
            1280: {
              slidesPerView: 3, // Show 4 slides on screens >= 1280px
            },
          }}
          className="mt-32"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="p-10">
              <div className="p-5 font-semibold text-center rounded-3xl shadow-xl bg-white relative h-[500px]">
                <div className="absolute top-[-3rem] right-[8rem] p-3 rounded-full">
                  <img
                    src={slide.img}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </div>
                <h1 className="mt-14 text-2xl">{slide.name}</h1>
                <div className="flex items-center justify-center mt-5 *:mx-3">
                  <img src="src/assets/img/star.png" className="w-5" alt="" />
                  <img src="src/assets/img/star.png" className="w-5" alt="" />
                  <img src="src/assets/img/star.png" className="w-5" alt="" />
                  <img src="src/assets/img/star.png" className="w-5" alt="" />
                  <img src="src/assets/img/star.png" className="w-5" alt="" />
                </div>
                <p className="mt-5 font-semibold text-slate-500 leading-[40px]">
                  {slide.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
