import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import "../styles/home.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  // const key = "SPAUR3DPmUBqYsSzPqhq15SQWK74eFKJXgcgcezh";
  const url = "https://images-api.nasa.gov/search?q=moon";
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [url]);
  function printData() {
    // data.collection.items.map((item) => console.log(item.data));
    Object.values(data.collection.items).map((item) => {
      return item.links[0] ? console.log(item.links[0].href) : {};
    });

    // console.log(Object.values(data.collection.items));
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
        {Object.values(data.collection.items).map((item) => (
          <div className="card">
            <Card
              title={item.data[0].title}
              description={item.data[0].description}
              // image={item.links[0].href}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
