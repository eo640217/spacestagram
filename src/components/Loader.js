import React from "react";
// import { Spinner } from "react-bootstrap";
import "../styles/loader.css";
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="planet"></div>
      <div className="text">
        <h1>loading...</h1>
      </div>
    </div>
  );
};
export default Loader;
