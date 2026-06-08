import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Portofolio from "./component/Portofolio";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bg-surface text-ink font-sans antialiased">
      <Navbar />
      <main>
        <Home />
        <About />
        <Portofolio />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;