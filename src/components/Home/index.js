import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import LogoTitle from "../../assets/images/ao.png";
import AnimatedText from "../AnitmatedText";
import Logo from "./Logo";
import Loader from "react-loaders";
import resume from "../../assets/files/Abderrahmane_Abdelioua_Lebenslauf.pdf";

const Home = () => {
  const [charClass, setCharClass] = useState("text-animate");
  const infoArr = ["b", "d", "e", "r", "r", "a", "h", "m", "a", "n", "e", ","];
  const jobArr = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  useEffect(() => {
    setTimeout(() => {
      setCharClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <>
      <div className={`container home-page`}>
        <div className="text-zone">
          <h1>
            <span className={charClass}>H</span>
            <span className={`${charClass} _12`}>i,</span>
            <br />
            <span className={`${charClass} _13`}>I</span>
            <span className={`${charClass} _14`}>'m</span>
            <img src={LogoTitle} alt="abderrahmane" />
            <AnimatedText charClass={charClass} strArr={infoArr} idx={15} />
            <br />
            <AnimatedText charClass={charClass} strArr={jobArr} idx={26} />
          </h1>
          <h2>Full-Stack Web Developer | MERN Stack | Express.js </h2>
          <div className="button-container">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <Link to={resume} download target="_blank">
              Download CV
            </Link>
          </div>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
