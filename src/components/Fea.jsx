import Card from "./Card";

export default function Fea() {
  const cardData = [
    {
      id: 1,
      name: "Young Learner (Starter)",
      age: "7 to 13 years",
      modules: "2 Modules",
      months: "5 months",
      color: "#c5e3ff",
      bgcolor2: "#d3eaff",
      Width: "350px",
      marginLeft: "0rem",
      url: "./src/assets/img/baby.webp",
      dis: "Basic English for Starters",
    },
    {
      id: 2,
      name: "Young Adult Learner (Starter)",
      age: "14 to 19 years",
      modules: "2 Modules",
      months: "5 months",
      color: "#f5d3e7",
      Width: "186px",
      marginLeft: "35px",
      bgcolor2: "#f7e1ed",
      url: "./src/assets/img/baby2.webp",
      dis: "Basic English for Starters",
    },
    {
      id: 3,
      name: "Adult Learner (Starter)",
      age: "20 years to above ",
      modules: "2 Modules",
      months: "5 months",
      color: "#f0ddc9",
      Width: "215px",
      marginLeft: "20px",
      bgcolor2: "#f0e1d7",
      url: "./src/assets/img/baby3.webp",
      dis: "Basic English for Starters",
    },
    {
      id: 4,
      name: "Young Learner (Prelim)",
      age: "7 to 13 years",
      modules: "2 Modules",
      months: "5 months",
      color: "#c5e3ff",
      Width: "215px",
      marginLeft: "7px",
      bgcolor2: "#d3eaff",
      url: "./src/assets/img/baby4.webp",
      dis: "Basic English for Starters",
    },
  ];

  return (
    <div className="container-fluid mx-auto px-28 h-[150vh] bg-gray-200 py-24">
      <h1 className="text-center font-semibold text-5xl">Featured Courses</h1>
      <div className="mt-20 grid gap-4 grid-cols-4">
        {cardData.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            age={card.age}
            months={card.months}
            modules={card.modules}
            url={card.url}
            dis={card.dis}
            color={card.color}
            bgcolor2={card.bgcolor2}
            Width={card.Width}
            marginLeft={card.marginLeft}
          />
        ))}
      </div>
      <div className="text-center mt-24">
        <button className="bg-blue-500 px-10 py-3 text-lg text-white font-semibold rounded-full hover:bg-sky-500 duration-500">
          See More
        </button>
      </div>
    </div>
  );
}
