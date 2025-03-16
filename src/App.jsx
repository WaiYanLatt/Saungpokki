import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import AppRouter from "./router/router";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AppRouter />
    </BrowserRouter>
  );
}
