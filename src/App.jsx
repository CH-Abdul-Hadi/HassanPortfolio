import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Testomonials from "./components/Testomonials/Testomonials";
import Educations from "./components/Educations/Educations";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/index.jsx";
// import { AnimatePresence } from "framer-motion";
// import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  // const [showWelcome, setShowWelcome] = useState(true); // initialize state

  return (
    <>
      {/* <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence> */}

      {/* {!showWelcome && ( */}
        <>
          <Navbar />
          <Hero />
          <AboutMe />
          <Educations />
          <Services />
          <Projects />
          <Testomonials />
          <Contact />
        </>
      {/* )} */}
    </>
  );
}

export default App;
