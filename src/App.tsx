import { BrowserRouter } from "react-router-dom";
import { About, Experience, Hero, Navbar, Tech, Works } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 ">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
