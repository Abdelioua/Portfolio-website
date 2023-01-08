import React from "react";
import "./index.scss";
const AnimatedText = ({ charClass, strArr, idx }) => {
  return (
    <span>
      {strArr.map((char, i) => {
        return (
          <span key={i + idx} className={`${charClass} _${i + idx}`}>
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedText;
