import React,{useState} from "react";
import { Navbar } from "./Component/Navbar";
import Hero from "./Component/Hero";
import Loader from "./Component/Loader";
import Footer from "./Component/Footer";

function App() {

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <div className="root">
      {loading ? <Loader/> : (
        <>
          <Navbar />
          <Hero />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
