import React from "react"; 

import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/hero/hero";
import Header from "./components/header/Header";
import Steps from "./components/steps/Steps";
import About from "./components/about/About";
import Brands from "./components/brand/Brands";
export default function App() {
  return (
    <div>
      <Header/>
     <Hero/>
     <Steps/>
     <About/>
     {/* coponenet */}
     <Brands/>
    </div>
    
  );
}

