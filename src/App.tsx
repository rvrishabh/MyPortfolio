import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 ">
          <div className="pb-10 bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <div className="relative z-0">
            <About />
            <Experience />
            <Tech />
            <Works />
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
