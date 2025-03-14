import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

export default function AppRouter() {
    return (
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<ProductPage/>} />
        </Routes>
    );
  }