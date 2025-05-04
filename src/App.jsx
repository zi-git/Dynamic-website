import React,{useState} from "react";
import { Navbar } from "./Component/Navbar";
import Hero from "./Component/Hero";
import Loader from "./Component/Loader";
import Footer from "./Component/Footer";

function App() {

 
  return (
    <div className="root">
     
      <Navbar />
          <Hero />
          <Footer />
    </div>
  )
}

export default App
