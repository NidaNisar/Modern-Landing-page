import React from "react"; 

import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/hero/hero";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div>
      <Header/>
     <Hero/>
    </div>
    
  );
}

