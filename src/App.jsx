import "./App.css";
import About from "./component/About";
import Experience from "./component/Experience";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Portofolio from "./component/Portofolio";
import Contact from "./component/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maintanance from "./component/Maintanance";

function App() {
  return (
    <>
      {/* <Navbar />
      <Home />
      <About />
      <Experience />
      <Portofolio />
      <Contact /> */}
      <Maintanance />
    </>
  );
}

export default App;
