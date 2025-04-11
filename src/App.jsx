import React from "react";
import Navbar from "./components/Navbar.jsx";
import Work from "./pages/Work.jsx";
import Start from "./pages/Start.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Start />
      <Work />
    </div>
  );
};

export default App;
