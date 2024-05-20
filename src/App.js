import React from "react";  
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperienced from "./components/WorkExperienced/WorkExperienced";

const App = () => {

  return(
    <>
    <Navbar />

    <div className="container">
      <Hero />
      <Skills />
      <WorkExperienced />
    </div>
    </>
  )
}

export default App;