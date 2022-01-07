import React, { useState } from "react";
import "../styles/card.css";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Card = ({ data }) => {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike(!like);
  };
  const title = data.data[0].title;
  const description = data.data[0].description;
  const image = data.links[0].href;
  return (
    <>
      <div className="card">
        <img className="card-img" src={image} alt={title} />
        <div className="card-content">
          <h1 className="card-header">{title}</h1>
          <p className="card-text">{description}</p>
          <button className="card-btn" onClick={toggleLike}>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
