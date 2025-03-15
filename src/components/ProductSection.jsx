import { useState } from "react";

export default function ProductSetion() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Easy-to-learn",
      dis: "Everyone can learn languages from anywhere with internet access.",
      urlImg: "./src/assets/img/smile.png",
      arrow: ".src/assets/img/down-arrow.png",
      color: "#ffefdd",
    },
    {
      id: 2,
      name: "Qualified Teachers",
      dis: "Courses will be taught by well-trained local and expat teachers.",
      urlImg: "src/assets/img/teacher.png",
      arrow: "src/assets/img/down-arrow.png",
      color: "#fce9fb",
    },
    {
      id: 3,
      name: "User-Friendly Interface",
      dis: "Our platform has a user-friendly interface, making navigation and course enrollment simple for all users.",
      urlImg: "src/assets/img/user.png",
      arrow: "src/assets/img/down-arrow.png",
      color: "#e9fdf5",
    },
    {
      id: 4,
      name: "Qualified Teachers",
      dis: "Courses will be taught by well-trained local and expat teachers.",
      urlImg: "src/assets/img/usergp.png",
      arrow: "src/assets/img/down-arrow.png",
      color: "#e9fdf5",
    },
    {
      id: 5,
      name: "Qualified Teachers",
      dis: "Courses will be taught by well-trained local and expat teachers.",
      urlImg: "src/assets/img/uro.png",
      arrow: "src/assets/img/down-arrow.png",
      color: "#dcdcdc",
    },
    {
      id: 6,
      name: "Relevant Time",
      dis: "Registered learners can learn language at their convenient time slots.",
      urlImg: "src/assets/img/clock.png",
      arrow: "src/assets/img/down-arrow.png",
      color: "#ffefdd",
    },
  ]);

  return (
    <div className="container-fluid mx-auto px-32 min-h-[100vh] w-full">
      <div className="pt-32">
        <h1 className="text-5xl font-semibold text-center">
          Our Main Products
        </h1>
      </div>
      <div className="flex justify-between items-center my-32">
        <div className="w-[500px]">
          <h1 className="font-semibold text-4xl">Face-to-Face</h1>
          <p className="font-semibold text-lg text-slate-700 mt-7">
            Explore personalized One-to-One or interactive One-to-Many courses
            for learners aged 7 and above. Advance your skills with local or
            expat teachers in a dynamic, engaging environment.
          </p>
          <button className="font-semibold text-white bg-blue-500 px-10 py-2 rounded-full mt-10 hover:bg-sky-500 duration-500">
            See More
          </button>
        </div>
        <div>
          <img src="src/assets/img/mainproduct1.webp" alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center my-32">
        <div>
          <img src="src/assets/img/plc.webp" alt="" />
        </div>
        <div className="w-[500px]">
          <h1 className="font-semibold text-4xl">PLC</h1>
          <p className="font-semibold text-lg text-slate-700 mt-7">
            PLC offers a variety of learning opportunities, including Thai
            language classes exclusively for ILBC students. More courses will be
            added soon, giving everyone the chance to explore and master
            different languages. Stay tuned for exciting new subjects!
          </p>
          <button className="font-semibold text-white bg-blue-500 px-10 py-2 rounded-full mt-10 hover:bg-sky-500 duration-500">
            See More
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center my-32">
        <div className="w-[450px]">
          <h1 className="font-semibold text-4xl">ILBC Quick Learn</h1>
          <p className="font-semibold text-lg text-slate-700 mt-7">
            ILBC Quick Learn is a free platform offering short videos for
            language learning and more, accessible on both web and mobile. Learn
            anytime, anywhere, with no restrictions.
          </p>
          <button className="font-semibold text-white bg-blue-500 px-10 py-2 rounded-full mt-10 hover:bg-sky-500 duration-500">
            See More
          </button>
        </div>
        <div>
          <img src="src/assets/img/quicklearn.webp" alt="" />
        </div>
      </div>
      <div className="bg-blue-500 w-full min-h-[300px] my-72 rounded-3xl p-20 relative">
        <h1 className="text-white font-semibold text-2xl">
          Sora E-Library for
        </h1>
        <h1 className="text-white font-semibold text-4xl mt-3">
          Saungpokki Students
        </h1>
        <button className="bg-slate-100 font-semibold px-7 py-3 mt-5 text-gray-500 rounded-full hover:bg-white hover:text-black duration-500">
          Go to Sora
        </button>
        <img
          src="src/assets/img/Sora.webp"
          className="absolute top-[-4rem] right-[21rem]"
          alt=""
        />
        <img
          src="src/assets/img/sora-mock.webp"
          className="absolute top-[-8rem] right-[3rem]"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-5xl font-semibold text-center">
          Why Choose Saungpokki?
        </h1>
      </div>
      <div className="grid grid-cols-2 mt-16 mb-20 gap-10 px-20">
        {cards.map((card) => (
          <div
            key={card.id}
            style={{ backgroundColor: card.color }}
            className="w-full h-36 rounded-3xl shadow-sm px-3 pt-3 relative"
          >
            <div className="flex items-center">
              <img src={card.urlImg} alt="" className="w-[90px]" />
              <div className="ms-[30px]">
                <h1 className="text-xl font-semibold">{card.name}</h1>
                <p className="mt-2 font-semibold text-gray-500">{card.dis}</p>
              </div>
              <img
                src={card.arrow}
                className="w-[20px] absolute top-[1rem] right-[1.5rem]"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
