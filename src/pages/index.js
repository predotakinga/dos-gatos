import React, { useState } from "react";
import { HoursObjOne } from "../components/Info/Data";
import { MenuObjOne } from "../components/Menu/Data";
import { AboutObjOne } from "../components/About/Data";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Info from "../components/Info";
import About from "../components/About";
import Menu from "../components/Menu";
import Contact from "../components/Contact";
import { ContactObjOne } from "../components/Contact/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Menu {...MenuObjOne} />
      <Info {...HoursObjOne} />
      <Contact {...ContactObjOne} />
      {/* <About {...AboutObjOne} /> */}
    </>
  );
};

export default Home;
