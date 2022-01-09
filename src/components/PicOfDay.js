import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/picOfDay.css";
import Loader from "./Loader";
const PicOfDay = ({ pictureOfdayUrl }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(pictureOfdayUrl)
        .then((response) => {
          setLoading(true);
          setImage(response.data.url);
          setTitle(response.data.title);
          setDescription(response.data.explanation);
          setDate(response.data.date);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [pictureOfdayUrl]);

  return (
    <div className="picture-container">
      {!loading ? (
        <div className="pic-loader">
          <Loader />
        </div>
      ) : (
        <>
          <div className="top-content">
            <a href={image} target="_blank" rel="noreferrer">
              <img src={image} alt={title} />
            </a>
          </div>
          <div className="bottom-content">
            <p>{date}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PicOfDay;
