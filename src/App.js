import React from "react";
// components
import Banner from "./components/Banner.js";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Work from "./components/Work.js";

const App = () => {
  return (
    <div className="bg-[#161a1d]">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />

      <div className="h-[100px]"></div>
    </div>
  );
};

export default App;
