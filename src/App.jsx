import React from "react";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Service";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
      <ToastContainer/>
    </div>
    
  );
};

export default App;
