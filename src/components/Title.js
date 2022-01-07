import React from "react";
import "../styles/title.css";

const Title = ({ title }) => {
  return (
    <div className="title">
      {title.split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
  );
};

export default Title;
