import "./styles.css";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Search from "./Search";

export default function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<Error />} />
      </Routes>

      <div className="App">{/*<About/>
    <Contact/>*/}</div>
    </>
  );
}
