import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedText from "../AnitmatedText";
import "./index.scss";
import Projects from "../Projects";

const Portfolio = () => {
  const [charClass, setCharClass] = useState("text-animate");
  const [projectArr, setProjectArr] = useState([]);
  const [Error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCharClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/Abdelioua/repos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else setError(true);
      })
      .then((data) => setProjectArr(data))

      .catch((err) => console.log(err));
  }, []);

  if (Error) return <div className="error">Error: failed to fetch api!</div>;
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedText
            charClass={charClass}
            strArr={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <Projects projectArr={projectArr} />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
