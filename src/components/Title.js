import React from "react";
import "../styles/title.css";

const Title = ({ title }) => {
  return (
    // <div className="title">
    //   {title.split("").map((char, i) => (
    //     <span key={i}>{char}</span>
    //   ))}
    // </div>
    <svg width="100%" height="100%">
      <text x="50%" y="60%" text-anchor="middle">
        {title}
      </text>{" "}
    </svg>
  );
};

export default Title;
