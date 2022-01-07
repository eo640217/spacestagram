import HomeView from "./views/HomeView";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  // const key = "SPAUR3DPmUBqYsSzPqhq15SQWK74eFKJXgcgcezh";
  // https://api.nasa.gov/planetary/apod?api_key=SPAUR3DPmUBqYsSzPqhq15SQWK74eFKJXgcgcezh
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomeView />} exact />
    //   </Routes>
    // </Router>

    <HomeView />
  );
};

export default App;
