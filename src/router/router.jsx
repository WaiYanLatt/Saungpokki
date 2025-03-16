import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import FacePage from "../pages/FacePage";
import Plc from "../pages/Plc";
import Tbl from "../pages/Tbl";

export default function AppRouter() {
    return (
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/product/faceToFace" element={<FacePage/>} />
          <Route path="/product/plc" element={<Plc/>} />
          <Route path="/product/tbl" element={<Tbl/>} />
        </Routes>
    );
  }