import React from "react";
import "../styles/title.css";

const Title = ({ title }) => {
  return (
    <div className="title">
      <svg width="100%" height="100%">
        <text x="50%" y="60%" text-anchor="middle">
          {title}
        </text>{" "}
      </svg>
    </div>
  );
};

export default Title;
