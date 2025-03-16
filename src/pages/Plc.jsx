import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Plc() {
  const cardData = [
    {
      id: 1,
      name: "Basic Thai Language Programme",
      age: "7 to 13 years",
      modules: "KG and Lower Primary Level",
      months: "5 months",
      color: "#c5e3ff",
      bgcolor2: "#d3eaff",
      Width: "230px",
      marginLeft: "0rem",
      url: "/src/assets/img/Thai1.webp",
      dis: "(KG and Lower Primary Level)",
    },
    {
      id: 2,
      name: "Basic Thai Language Programme",
      age: "14 to 19 years",
      modules: "Upper Primary Level",
      months: "5 months",
      color: "#f5d3e7",
      Width: "260px",
      marginLeft: "20px",
      bgcolor2: "#f7e1ed",
      url: "/src/assets/img/thai2.webp",
      dis: "(Upper Primary Level)",
    },
    {
      id: 3,
      name: "Basic Thai Language Programme",
      age: "20 years to above ",
      modules: "Lower and Upper Secondary Level",
      months: "5 months",
      color: "#f0ddc9",
      Width: "230px",
      marginLeft: "20px",
      bgcolor2: "#f0e1d7",
      url: "/src/assets/img/thai3.webp",
      dis: "Lower and Upper Secondary Level",
    },
  ];

  return (
    <div className="container-fluid px-28 min-h-[150vh] pt-28">
      <Link to="/product">
        <button className="bg-glass w-16 h-16 rounded-full my-10 flex items-center justify-center">
          <img src="/src/assets/img/left-arrow.png" className="w-5" alt="" />
        </button>
      </Link>
      <h1 className="my-10 font-semibold text-3xl text-center">Premium Learning Courses (PLC)</h1>
      <div className="grid gap-4 grid-cols-4">
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
    </div>
  );
}
