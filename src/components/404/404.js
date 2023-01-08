import "./404.scss";
import React from "react";
import { Link } from "react-router-dom";

const DoesNotExist = () => {
  return (
    <div className="container does-not-exist">
      <h1>Page does not exist!!</h1>
      <Link
        className="animate__animated animate__flip animate__delay-1s"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};

export default DoesNotExist;
