import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import "../styles/home.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  // const key = "SPAUR3DPmUBqYsSzPqhq15SQWK74eFKJXgcgcezh";
  const url = "https://images-api.nasa.gov/search?q=space";
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response);
    });
  }, [url]);

  function printData() {
    data.data.collection.items.map((item) => console.log(item.data));
  }

  return (
    <div className="home-container">
      <div>
        <button onClick={printData}>print</button>
      </div>
      <div className="title">
        <Title title={"SPACESTAGRAM"} />
      </div>
      <div className="cards">
        <div className="card">
          <Card
            title={"card 1"}
            description={"lorem text"}
            image={
              "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
