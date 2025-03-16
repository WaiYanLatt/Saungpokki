import Card2 from "../components/Card2";
import Footer from "../components/Footer";

export default function ProductPage() {
  const Cardata = [
    {
      id: 1,
      name: "Face To Face",
      urlImg: "src/assets/img/mainproduct1.webp",
      bgcolor: "#e5cffe",
      link: "/product/faceToFace",
    },
    {
      id: 2,
      name: "ILBC Quick Learn",
      urlImg: "src/assets/img/quicklearn.webp",
      bgcolor: "#9ccffe",
      link: "https://www.ilbcquicklearn.com/",
    },
    {
      id: 3,
      name: "PLC",
      urlImg: "src/assets/img/plc.webp",
      bgcolor: "#fdda96",
      link: "/product/plc",
    },
    {
      id: 4,
      name: "TBL",
      urlImg: "src/assets/img/TBL.webp",
      bgcolor: "#a3fbd2",
      link: "/product/tbl",
    },
  ];

  return (
    <div>
      <div className="container-fluid px-28 h-[100vh] bg-gradient-to-r from-[#f6f0fc] to-[#ebf4f8]">
        <div className="grid gap-4 grid-cols-4 pt-52">
          {Cardata.map((car) => (
            <Card2
              key={car.id}
              name={car.name}
              urlImg={car.urlImg}
              bgcolor={car.bgcolor}
              link={car.link}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
