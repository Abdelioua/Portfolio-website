import "./indes.scss";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedText from "../AnitmatedText";
import { useEffect, useState } from "react";

import Loader from "react-loaders";
const About = () => {
  const [charName, setCharName] = useState("text-animate");
  const aboutArr = ["A", "b", "o", "u", "t", " ", "M", "e"];

  useEffect(() => {
    setTimeout(() => {
      setCharName("text-animate-hover");
    }, 3000);
  });
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedText strArr={aboutArr} charClass={charName} idx={15} />
          </h1>
          <p>
            Creative and enthusiastic web developer with a focus on fullstack
            development using JavaScript, React, Redux, and Express.js, and a
            clear understanding of HTML, CSS, and its popular frameworks such as
            Bootstrap as well as its preprocessors like Sass.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
