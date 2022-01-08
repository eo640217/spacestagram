import React, { useState } from "react";
import "../styles/card.css";
import GradeIcon from "@mui/icons-material/Grade";

const Card = ({ data }) => {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike(!like);
  };
  const title = data.data[0].title;
  const description = data.data[0].description;
  const image = data.links[0].href;
  const date = data.data[0].date_created.substring(0, 10);

  return (
    <>
      <div className="card">
        <a href={image} target="_blank" rel="noreferrer">
          <img className="card-img" src={image} alt={title} />
        </a>
        <div className="card-content">
          <h1 className="card-header">{title}</h1>
          <p className="card-text">{description}</p>
          <p className="card-year">{date}</p>
          <div
            onClick={toggleLike}
            className="star-btn"
            style={
              like
                ? { color: "rgb(253, 207, 0)" }
                : { color: "var(--primary-color)" }
            }
          >
            <GradeIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
