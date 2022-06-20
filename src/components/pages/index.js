import React, { useState } from "react";
import Sidebar from "./../Sidebar/index";
import Navbar from "./../Navbar/index";
import HeroSection from "../HeroSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
    </>
  );
};

export default Home;
