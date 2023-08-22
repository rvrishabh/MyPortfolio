import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 ">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
