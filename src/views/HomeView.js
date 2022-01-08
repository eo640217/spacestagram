import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import "../styles/home.css";
import "../styles/buttons.css";
import axios from "axios";
import Particle from "../components/Particle";
import Loader from "../components/Loader";

const Home = () => {
  const [data, setData] = useState([]);
  const [favs, setFavs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("space");
  const [displayedData, setDisplayedData] = useState(data);
  const [displayAll, setDisplayAll] = useState(true);

  // const key = "SPAUR3DPmUBqYsSzPqhq15SQWK74eFKJXgcgcezh";
  const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;
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
    setDisplayedData(data);
    setDisplayAll(true);
  }
  function showFavs() {
    setDisplayedData(favs);
    setDisplayAll(false);
  }
  return (
    <div className="home-container">
      <div className="nasa-logo">
        <img
          src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
          alt="nasa-logo"
        />
      </div>
      <Particle
        value={14}
        type={"star"}
        value_area={800}
        color={"hsl(189, 68%, 75%)"}
      />
      <div className="title">
        <Title title={"SPACESTAGRAM"} />
      </div>
      <div className="bar">
        <div className="buttons">
          {/* <button onClick={showAll} id="allButton">
            All Pictures
          </button>
          <button onClick={showFavs} id="favButton">
            Favourites
          </button> */}
        </div>
        <div className="searchBar">
          <input
            className="form__input"
            type="search"
            placeholder="search..."
            onChange={(event) => setQuery(event.target.value || "space")}
          />
        </div>
      </div>
      {!loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="cards">
          {data.map((data, i) => (
            <div className="card" key={i}>
              <Card data={data} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
