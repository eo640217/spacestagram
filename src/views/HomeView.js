import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import "../styles/home.css";
import axios from "axios";
import Particle from "../components/Particle";
import Buttons from "../components/Buttons";

const Home = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("space");
  // const key = "SPAUR3DPmUBqYsSzPqhq15SQWK74eFKJXgcgcezh";
  const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url)
        .then((response) => {
          setData(response.data.collection.items);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [url]);

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
          <Buttons />
        </div>
        <div className="searchBar">
          <input
            className="input"
            type="search"
            placeholder="search..."
            onChange={(event) => setQuery(event.target.value || "space")}
          />
        </div>
      </div>
      <div className="cards">
        {data.map((data, i) => (
          <div className="card" key={i}>
            <Card data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
