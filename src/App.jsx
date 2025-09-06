import React from "react"; 

import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/hero/hero";
import Header from "./components/header/Header";
import Steps from "./components/steps/Steps";
import About from "./components/about/About";
export default function App() {
  return (
    <div>
      <Header/>
     <Hero/>
     <Steps/>
     <About/>
    </div>
    
  );
}

