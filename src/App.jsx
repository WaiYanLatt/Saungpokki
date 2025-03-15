import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import AppRouter from "./router/router";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AppRouter />
      <Footer/>
    </BrowserRouter>
  );
}
