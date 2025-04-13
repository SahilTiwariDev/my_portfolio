import React from "react";
import Navbar from "./components/Navbar";
import Start from "./pages/Start";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Start />
      <Work />
      <About />
      <Contact />
      
    </div>
  );
};

export default App;
