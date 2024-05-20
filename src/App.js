import React from "react";  
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperienced/WorkExperience";

const App = () => {

  return(
    <>
    <Navbar />

    <div className="container">
      <Hero />
      <Skills />
      <WorkExperience />
    </div>
    </>
  )
}

export default App;