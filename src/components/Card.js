import React, { useState } from "react";
import "../styles/card.css";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Card = ({ title, description, image }) => {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <cardStyled>
      <div className="card">
        <img className="card-img" src={image} alt={title} />
        <div className="card-content">
          <h1 className="card-header">{title}</h1>
          <p className="card-text">{description}</p>
          <button className="card-btn">
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </cardStyled>
  );
};

export default Card;
