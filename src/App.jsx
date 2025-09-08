import React from "react"; 

import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/hero/hero";
import Header from "./components/header/Header";
import Steps from "./components/steps/Steps";
import About from "./components/about/About";
import Brands from "./components/brand/Brands";
import Work from "./components/works/Work";
import Stats from "./components/stats/Stats";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Testimonal from "./components/testimonal/Testimonal";
export default function App() {
  return (
    <div>
      <Header/>
     <Hero/>
     <Steps/>
     <About/>
     <Testimonal/>
     <Brands/>
     <Work/>
     <Stats/>
     <News/>
     <Contact/>
     <Footer/>

    </div>
    
  );
}

