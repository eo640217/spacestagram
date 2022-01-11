import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import "../styles/home.css";
import "../styles/buttons.css";
import axios from "axios";
import Particle from "../components/Particle";
import Loader from "../components/Loader";
import PicOfDay from "../components/PicOfDay";
import NasaLogo from "../components/NasaLogo";
import Nothing from "../components/Nothing";
// require("dotenv").config();

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("earth");
  const [date, setDate] = useState("");
  const [displayAll, setDisplayAll] = useState(true);
  const key = process.env.REACT_APP_NASA_API_KEY;
  const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;
  const pictureOfdayUrl = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`;

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url)
        .then((response) => {
          setData(response.data.collection.items);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [url]);

  function showAll() {
    setDisplayAll(true);
  }
  function showPictureOfDay() {
    setDisplayAll(false);
  }
  return (
    <div className="home-container">
      <NasaLogo />
      <Particle
        value={14}
        type={"star"}
        value_area={800}
        color={"hsl(189, 68%, 75%)"}
      />
      <Title title={"SPACESTAGRAM"} />
      <div className="bar">
        <div className="buttons">
          <button onClick={showAll} id="allButton">
            All Pictures
          </button>
          <button onClick={showPictureOfDay} id="Button">
            Astronomy Picture of the Day
          </button>
        </div>
      </div>
      {!loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : displayAll ? (
        <>
          <div className="searchBar">
            <input
              className="form__input"
              type="search"
              placeholder="search..."
              onChange={(event) => setQuery(event.target.value || "space")}
            />
          </div>
          {data.length < 1 ? (
            <Nothing />
          ) : (
            <div className="cards">
              {data.map((data, i) => (
                <div className="card" key={i}>
                  <Card data={data} />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="astronomy">
            <label>DATE</label>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date"
            />
          </div>
          <PicOfDay pictureOfdayUrl={pictureOfdayUrl} />
        </>
      )}
    </div>
  );
};
export default Home;
