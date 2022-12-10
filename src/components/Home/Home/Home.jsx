import React from "react";
import './Home.css'
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import About from "../About/About";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
