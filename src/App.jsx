import "./App.css";
import About from "./component/About";
import Experience from "./component/Experience";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Portofolio from "./component/Portofolio";
import Contact from "./component/Contact";
import Clients from "./component/Clients";
import Gallery from "./component/Gallery";

function App() {
  return (
    <div className="font-body bg-background">
      <Navbar />
      <Home />
      <About />
      <Clients />      {/* <-- Tambahkan di sini */}
      <Experience />
      <Portofolio />
      <Gallery />      {/* <-- Tambahkan di sini */}
      <Contact />
    </div>
  );
}

export default App;