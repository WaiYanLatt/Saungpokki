import { useState } from "react";

export default function AboutSection() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Students",
      member: "10K+",
      img: "src/assets/img/gradu.png",
      description: "Enrolled Students",
    },
    {
      id: 2,
      name: "Products",
      member: "3",
      img: "src/assets/img/Books.webp",
      description: "Main Products",
    },
    {
      id: 3,
      name: "Teachers",
      member: "3K+",
      img: "src/assets/img/teacher.png",
      description: "Well trained teachers",
    },
  ]);

  return (
    <div className="container-fluid flex items-center relative justify-center px-24 w-[100%] mt-[250px] h-[100vh] bg-[#c1e3ff]">
      <div className="absolute top-[-30px] flex justify-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-glass w-[250px] h-[200px] mx-[30px] p-5 rounded-3xl relative"
          >
            <div className="flex items-center justify-center border-4 border-white absolute top-[-50px] ml-[50px] bg-sky-100 w-[100px] h-[100px]  rounded-full">
              <img src={item.img} alt="" className="w-[60px] h-[70px]" />
            </div>
             <div className="text-center mt-16">
             <h2 className="text-3xl font-semibold">{item.member}</h2>
             <p className="text-gray-700 mt-5 font-semibold text-xl">{item.description}</p>
             </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-[12rem]">
        <h1 className="font-semibold text-4xl">What is Saungpokki?</h1>
        <p className="mt-7 mx-[200px] font-semibold text-gray-700 text-xl">
          Saungpokki is an innovative and creative EdTech online learning
          platform powered by ILBC, designed for everyone passionate about
          education and language proficiency.
        </p>
        <button className="mt-10 bg-blue-500 py-2 hover:bg-sky-500 duration-500 px-10 text-lg rounded-full font-semibold text-white">
          See More
        </button>
      </div>
    </div>
  );
}
