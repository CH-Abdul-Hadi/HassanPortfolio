import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Testomonials from "./components/Testomonials/Testomonials";
import Educations from "./components/Educations/Educations";
import Contact from './components/Contact/Contact'
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Educations />
      <Services/>
      <Testomonials />
      <Contact/>
    </div>
  );
}

export default App;
